
var CURRENT_PATH; 

(function(num) {
	const uri = window.location.pathname.split('/')[1];
	
	if (uri == 'courses') {
		CURRENT_PATH = '../';
	} else {
		CURRENT_PATH = '';
	}
})();

$.ajax({
    type: "GET",
    url: CURRENT_PATH+"include/template-modal.html",
    async: false,  
    success: function (data, textStatus) {
        $('#template-modal').html(data);
    }          
});

$.ajax({
    type: "GET",
    url: CURRENT_PATH+"include/footer.html",
    async: false,  
    success: function (data, textStatus) {
        $('footer').html(data);
    }          
});

$.ajax({
    type: "GET",
    url: CURRENT_PATH+"include/api.html",
    async: false,  
    success: function (data, textStatus) {
        $('#api').html(data);
    }          
});
