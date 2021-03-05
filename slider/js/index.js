
const storeModal = new Vuex.Store({
	state: {
		showModal: {0:false, 1:false, 2:false, 3:false, 4:false},
		showNumModal: null,
		showIndexModal: null,
		buttonModel: null
	},
	mutations: {
		changeModalActive(state, payload) {
			state.showModal[payload.index] = payload.modal;
			state.showNumModal = payload.num;
			state.showIndexModal = payload.index;
			state.buttonModel = payload.name;
		}
	}
});

//-----------------------------------------------------------
// elements
//-----------------------------------------------------------
var appHeader = new Vue({
	el: '#header',
	storeModal,
	methods: {
		getShowModal(id) {
			storeModal.commit('changeModalActive', {index:0, modal:true, num:id, name:'Главная. Шапка'});
		}
	},
	computed: {
		showModal() { return storeModal.state.showModal; }
	}
});

var appMenu = new Vue({
	el: '#menu',
	store,
	storeModal,
	methods: {
		clickMenu() {
			if($('.header-menu-touch').is(':visible')) {
				var headerMenu = '.header-menu';
				$(headerMenu).slideToggle();
				$(headerMenu+'-touch').toggleClass('open');	
			} 
		},
		getShowModal(id) {
			storeModal.commit('changeModalActive', {index:1, modal:true, num:id, name:'Главная. Меню'});
		}
	},
	computed: {
		storeMenu() { return store.state.storeMenu; },
		showModal() { return storeModal.state.showModal; }
	}
});

var appCourses = new Vue({
	el: '#courses',
	store,
	storeModal,
	data: {
		payForm: false,
		payFormData: {
			name: '',
			phone: null,
		},
		payInfo: {
			id: '',
			nameCource: '',
			price: ''
		},
		payLink: '#'
	},
	methods: {
		getShowModal(id) {
			const name = 'Главная. Наши курсы: '+this.storeCourses[id].name;
			storeModal.commit('changeModalActive', { index:2, modal:true, num:id, name:name });
		},
		showPayForm(id, name, price) {
			this.payInfo.id = id;
			this.payInfo.nameCource = name;
			this.payInfo.price = price;

			this.payForm = true;
		},
		getPayLink() {
			const id = this.payInfo.id;
			const nameCource = this.payInfo.nameCource;
			const price = this.payInfo.price;
			
			const namePerson = this.payFormData.name;
			const phonePerson = this.payFormData.phone;

			axios.post('robokassa/robokassa_pay.php', {
				inv_id: id,
				inv_desc: nameCource.replace(/#/g, ''),
				out_summ: price,
				shp_name: namePerson,
  				shp_sec_name: phonePerson,
			})
			.then(res => this.payLink = res.data)
			.catch(error => console.log(error));
		},
		closePayForm() {
			this.payForm = false;
			this.payFormData.name = '';
			this.payFormData.phone = '';
			this.payLink = '#';
		},
		checkPhone(e) {
			const value = e.target.value;
			const length = value.toString().length;

			if (length === 11) {
				this.getPayLink();
			} else {
				this.payLink = '#';
			}
		},
	},
	computed: {
		storeCourses() { return store.state.storeCourses; },
		showModal()    { return storeModal.state.showModal; }
	},
});

var appTeachers = new Vue({
	el: '#teachers',
	store,
	storeModal,
	methods: {
		getShowModal(id) {
			storeModal.commit('changeModalActive', {index:3, modal:true, num:id, name:'Главная. Преподаватели'});
		}
	},
	computed: {
		storeTeachers() { return store.state.storeTeachers; },
		showModal()     { return storeModal.state.showModal; }
	}
});

var appSteps = new Vue({
	el: '#steps',
	store,
	storeModal,
	methods: {
		getShowModal(id) {
			storeModal.commit('changeModalActive', {index:4, modal:true, num:id, name:'Главная. Как проходит обучение'});
		}
	},
	computed: {
		storeSteps() { return store.state.storeSteps; },
		showModal()  { return storeModal.state.showModal; }
	}
});

var appReviews = new Vue({
	el: '#reviews',
	store,
	computed: {
		storeReviews() { return store.state.storeReviews; }
	}
});




//--------------------------------------------------------------
// SLICK SLIDER
//--------------------------------------------------------------
$('.reviews-container').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{breakpoint: 1200,  settings:  { slidesToShow: 1, slidesToScroll: 1 }}
	]
});

//--------------------------------------------------------------
// MENU
//--------------------------------------------------------------
var headerMenu = '.header-menu';

$(headerMenu+'-touch').on('click', function() {
	$(headerMenu).slideToggle();
	$(this).toggleClass('open');
});

$(window).on('resize', function() {
	if($(headerMenu).is(':hidden')) {
		$(headerMenu).removeAttr('style');
	}
});

//--------------------------------------------------------------
// SCROLL
//--------------------------------------------------------------
$(window).on('scroll', function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	
	var heightHeader = parseInt($('header').css('height'));

	if (scrolled > heightHeader) {
		$('.header-menu-container .btn-menu').css('opacity', '1');
	} else {
		$('.header-menu-container .btn-menu').css('opacity', '0');
	}
});


//--------------------------------------------------------------
// INPUT PHONE
//--------------------------------------------------------------
// $(document).ready(function(){
// 	$('#payFormPhone').mask('+7(999)999-99-99');
// });

jQuery.fn.ForceNumericOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.key;
            const keyCode = e.keyCode;

            return (
                key == 0 || 
                key == 1 || 
                key == 2 || 
                key == 3 || 
                key == 4 || 
                key == 5 || 
                key == 6 || 
                key == 7 || 
                key == 8 || 
                key == 9 || 
                keyCode == 8  || // Backspace
                keyCode == 37 || // ArrowLeft
                keyCode == 39    // ArrowRight
        	);
        });
    });
};

$('#payFormPhone').ForceNumericOnly();
