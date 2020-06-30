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

// Pega o valor em px do left e retorna em número real

function conv(posicao) {
    var variavel = $(`#slide:nth-child(${posicao})`).css("left");
    variavel = parseFloat(variavel.replace('px', ''));
    return variavel;
}

// Função do slider

function switchSlide(x) {
    var clique = x;

    var divs = $('.slide');

    var qtd = divs.length;

    var ultimo = conv(qtd);

    var primeiro = conv(1);

    for(var z = 1; z <= qtd; z++) {
        var margem = conv(z);

        if(clique == 1 && ultimo > 0) {
            margem = (margem - 1920) + "px";
            $(`#slide:nth-child(${z})`).css('left', `${margem}`);
        } else if(clique == 2 && primeiro < 0) {
            margem = (margem + 1920) + "px";
            $(`#slide:nth-child(${z})`).css('left', `${margem}`);
        }
    }
}