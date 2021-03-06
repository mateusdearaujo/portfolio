//	Efeito de transição com o "menu âncora"

$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset
	}, 1000);
});

// Função do menu responsivo

function menuSlide() {
	var marginLeft = $('nav').css("margin-left");

	if(marginLeft == "756px") {
		$('nav').css('margin-left', '0');
	} else {
		$('nav').css('margin-left', '756px');
	}
}

// Fechar menu ao clikar no link âncora

function menuSlideClose() {
	$('nav').css('margin-left', '756px');
}

// Altera a cor da barra do top

$(window).on("scroll", function() {
    var windowHeight = $(window).scrollTop();
    var headerHeight = $('header').outerHeight() - 1;

    if(windowHeight >= headerHeight) {
      $(".topbar").addClass("top-color");
    } else {
      $(".topbar").removeClass("top-color");
    }
});

// Pega o valor css left do slide e retorna em número real

function leftInt(pos) {
    var x = $(`#slide:nth-child(${pos})`).css("left");
    return x = parseFloat(x.replace('px', ''));
}

// Função do slider

function switchSlide(x) {
	var clique = x;
	var qtd = $('.slide').length;
    var ultimo = leftInt(qtd);
    var primeiro = leftInt(1);

    for(var z = 1; z <= qtd; z++) {
        var margem = leftInt(z);

        if(clique == 1 && ultimo > 0) {
            margem = (margem - 1920) + "px";
            $(`#slide:nth-child(${z})`).css('left', `${margem}`);
        } else if(clique == 2 && primeiro < 0) {
            margem = (margem + 1920) + "px";
            $(`#slide:nth-child(${z})`).css('left', `${margem}`);
        }
    }
}