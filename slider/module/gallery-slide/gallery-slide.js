
_galleryHtml();
// get html
function _galleryHtml() {
	var html = `
		<div class="_galleryContainer">
			<button class="_gallerySlide _galleryBack" onclick="_gallerySlide(false);"></button>
			<div class="_galleryContent" data-ident="" data-arr=""></div>
			<button class="_gallerySlide _galleryNext" onclick="_gallerySlide(true);"></button>
			<div class="_galleryClose" onclick="_galleryClose();"></div>
		</div>
	`;
	$('body').append(html);
}

// get gallery
function _galleryGet(id, element) {
	_galleryCount(element);
	$('._galleryContainer').css('visibility', 'visible');
	_galleryFull(id);
}

// get count elements 
function _galleryCount(element) {
	var arrImage = [];
	$('.'+element).each(function() {
		arrImage.push(this.id);
	});
	$('._galleryContent').attr('data-arr', arrImage);
}

// show full image
function _galleryFull(id) {
	var picture = $('#'+id).css('background-image');
	$('._galleryContent').css('background-image', picture);
	$('._galleryContent').attr('data-ident', id);
}

// slide image
function _gallerySlide(next) {
	var id = $('._galleryContent').attr('data-ident');
	var arrImage = $('._galleryContent').attr('data-arr').split(',');
	var index = arrImage.indexOf(id);
	var length = arrImage.length;
	// previous
	if ( (index!=0) && !next) {
		_galleryFull(arrImage[--index]);
	}
	// next
	if ( (index!=(length-1)) && next) {
		_galleryFull(arrImage[++index]);
	}
}

// close slide
function _galleryClose() {
	$('._galleryContainer').css('visibility', 'hidden');
	$('._galleryContent').css('background-image', 'none');
}
