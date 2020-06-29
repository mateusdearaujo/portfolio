// Efeito de transição com o "menu âncora"

$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset
	}, 1000);
});

//  Altera a cor da barra do top

$(window).on("scroll", function() {
    var windowHeight = $(window).scrollTop();
    var headerHeight = $('header').outerHeight() - 1;

    if(windowHeight >= headerHeight) {
      $(".topbar").addClass("top-color");
    } else {
      $(".topbar").removeClass("top-color");
    }
});

var slidershow = document.getElementsById("slidershow");

// Slide

function switchSlide(x) {
    var clique = x;
    var margem = $('.slidershow').css("margin-left");
    var limite = -3700;
    margem = parseFloat(margem.replace('px', ''));

    if(clique == 1 && margem > 0 ||clique == 2 && margem < limite) {   
    } else if(clique == 1) {
        document.getElementById("slidershow").style.marginLeft = margem + 3750 + "px";
    } else {
        document.getElementById("slidershow").style.marginLeft = margem - 3750 + "px";
    }
}