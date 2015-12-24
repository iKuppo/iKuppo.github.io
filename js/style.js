$(document).ready(function() {  
	sizeitup();
    $('#name').focus();
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

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Backgorund Image Move with Mouse

// var mouseX = 0, mouseY = 0;
// $(document).mousemove(function(e){
//    mouseX = e.pageX;
//    mouseY = e.pageY; 
// });

// var loop = setInterval(function(){
//     follower.css({left:xp, top:yp});
// }, 30);

$('.matrix-box').mousemove(function(e){
	// var offset = $(this).offset();
	// var relX = mouseX - offset.left;
	// var relY = mouseY - offset.top;
    var midX = (e.offsetX - ($(this).width()/2))/-20;
    var midY = (e.offsetY - ($(this).outerHeight()/2))/-20;
    $(this).find('.matrix-image').css('left', midX);
    $(this).find('.matrix-image').css('top', midY);
});

$('.matrix-box').mouseout(function(e){
    $(this).find('.matrix-image').animate({
    	top: 0,
    	left: 0
    }, 300);
});

$('.matrix-box h4').mousemove(function(e) {
	e.stopPropagation();
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Contact

function postToGoogle() {
    var field1 = $('#name').val();
    var field2 = $('#email').val();
    var field3 = $('#message').val();

    $.ajax({
        url: "https://docs.google.com/forms/d/1U_r8MzNTkyPDFMAGCh0Y6Cvdbroja16Oh3kVr46wPw8/formResponse",
        data: {
        	"entry.1545498784": field1,
        	"entry.1827286110": field2,
        	"entry.976607894": field3
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                clean();
            },
            200: function() {
            	clean();
            }
        }
    });
}

function clean() {
	$('#name').val('');
	$('#email').val('');
	$('#message').val('');
    $('#contact h3').html('Message Received!');
}

$(document).ready(function(){
    $('#contact-form').submit(function() {
        postToGoogle();
        return false;
    });
});