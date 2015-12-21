$(document).ready(function() {  
	sizeitup();
});
$(window).resize(function() {
	sizeitup();
});
window.onload = function() {
	sizeitup();
};
$(window).scroll(function() {
	sizeitup();
});

function sizeitup() {
	var bodyH = $(window).height();
	if($(window).scrollTop() > $('body').position().top) {
		$('header').removeClass('top');
	}
	else {
		$('header').addClass('top');
	}
};

$('#navicon').click(function() {
	$('header').toggleClass('open');
});


// Backgorund Image Move with Mouse

$('.matrix-box').mousemove(function(e){
    var midX = (e.offsetX - ($(this).width()/2))/-10;
    var midY = (e.offsetY - ($(this).outerHeight()/2))/-10;
    $(this).find('.matrix-image').css('left', midX);
    $(this).find('.matrix-image').css('top', midY);
});

// $('.matrix-box').mouseout(function(e){
// 	console.log('hey');
//     $(this).find('.matrix-image').css('left', 0);
//     $(this).find('.matrix-image').css('top', 0);
// });

$('.matrix-box h4').mousemove(function(e) {
	e.stopPropagation();
});