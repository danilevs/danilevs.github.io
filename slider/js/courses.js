
const storeModal = new Vuex.Store({
    state: {
        showModal: false,
        showNumModal: null,
        showIndexModal: null,
        buttonModel: null
    },
    mutations: {
        changeModalActive(state, payload) {
            state.showModal = payload.modal;
            state.showNumModal = payload.num;
            state.showIndexModal = payload.index;
            state.buttonModel = payload.name;
        }
    }
});

const index = getUrlParams();

var app = new Vue({
	el: '#app',
    store,
    storeModal,
	data: {
		name:              store.state.storeCourses[index].name,
		age:               store.state.storeCourses[index].age,
		price:             store.state.storeCourses[index].price,
		modules:           store.state.storeCourses[index].modules,
		projects:          store.state.storeCourses[index].projects,
        teacher:           store.state.storeCourses[index].teacher,
        courseDescription: store.state.storeCourses[index].description,
        showDescription:   null
	},
    methods: {
        getShowModal(name) {
            storeModal.commit('changeModalActive', {index:0, modal:true, num:index, name:'Курсы. '+name});
        },
        getDescription(num) {
            this.showDescription[num] = true;
        },
        hideDescription(num) {
            this.showDescription[num] = false;
        }
    },
    created() {
        var obj = {};
        for (var i=0; i<=this.modules.length-1; i++) {
            obj[i] = false;
        }
        this.showDescription = obj;
		document.title = this.name;
    },
    computed: {
        teacherData() { return store.state.storeTeachers[this.teacher] },
        showModal()   { return storeModal.state.showModal; }
    }
});

function getUrlParams(param) {
    const uri = window.location.pathname.split('/')[2];
    return uri;
}


