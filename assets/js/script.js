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