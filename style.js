(function (blink) {
	'use strict';

	var eli_demoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	eli_demoStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_eli_demo',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'eli_demo',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title3'} },
				{ name: 'Tit Actividades', element: 'h4', attributes: { 'class': 'bck-title4'} },
				{ name: 'Tit Actividades2', element: 'h4', attributes: { 'class': 'bck-title5'} },
				{ name: 'Tit LovingLondon', element: 'h4', attributes: { 'class': 'bck-title6'} },
				{ name: 'Tit-Blanco-LovingLondon', element: 'h4', attributes: { 'class': 'bck-title7'} },
				{ name: 'Tit-NewYork1', element: 'h4', attributes: { 'class': 'bck-title8'} },
				{ name: 'TitActivid-NewY', element: 'h4', attributes: { 'class': 'bck-title9'} },
				{ name: 'Tit-Rojo', element: 'h4', attributes: { 'class': 'bck-title10'} },
				{ name: 'Tit-Blanco', element: 'h4', attributes: { 'class': 'bck-title11'} },
				{ name: 'Tit-Negro', element: 'h4', attributes: { 'class': 'bck-title12'} },
				{ name: 'Tit-FestivalsArefun', element: 'h4', attributes: { 'class': 'bck-title13'} },
				{ name: 'Tit-Festi-Subrayado', element: 'h4', attributes: { 'class': 'bck-title15'} },
				{ name: 'Tit-Festiv-Blanco', element: 'h4', attributes: { 'class': 'bck-title14'} },
				{ name: 'Tit-Scotland', element: 'h4', attributes: { 'class': 'bck-title16'} },



				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},
				{ name: 'Color-popup', element: 'span', attributes: { 'class': 'bck-enfasis2' }},
				{ name: 'Color Azul', element: 'span', attributes: { 'class': 'bck-enfasis3' }},
				{ name: 'Color Rojo', element: 'span', attributes: { 'class': 'bck-enfasis5' }},
				{ name: 'Color Naranja', element: 'span', attributes: { 'class': 'bck-enfasis4' }},
				{ name: 'Font Monofonto', element: 'span', attributes: { 'class': 'bck-enfasis6' }},
				{ name: 'Font Festivals', element: 'span', attributes: { 'class': 'bck-enfasis10' }},
				{ name: 'Font Gelato', element: 'span', attributes: { 'class': 'bck-enfasis9' }},
				{ name: 'CirculoTITULO', element: 'span', attributes: { 'class': 'bck-enfasis7' }},
				{ name: 'FondoAzul', element: 'span', attributes: { 'class': 'bck-enfasis8' }},
				
				{ name: 'Lista Desordenada1', element: 'ul', attributes: { 'class': 'bck-ul-1'} },
				{ name: 'Lista Desordenada2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
							
				{ name: 'Lista NumeroNaranja', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'Lista Letra', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista Numero', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista Letra-minus', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Circu-Rojo', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },

				{ name: 'CajaBordesColor', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'CajaPuntosAzul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-11' } },
				{ name: 'CajaPuntosRojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'CajaPuntosNegro', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },
				{ name: 'CajaPuntosBlanco', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				{ name: 'CajaPuntosRojo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'CajaPuntosVerde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-15' } },
				{ name: 'CajaPuntosNaranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-16' } },
				{ name: 'CajaNaranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },
				{ name: 'CajaAzul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'CajaBlanca', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'CajaNegra', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'CajaRojaBorde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
				{ name: 'CajaNEWyork', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'CajaJapon1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-17' } },
				{ name: 'CajaJapon2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-18' } },
				{ name: 'CajaJapon3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-19' } },
				{ name: 'CajaJapon4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-20' } },
				{ name: 'CajaJapon5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-21' } },
				{ name: 'CajaBordesScotland', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-22' } },
				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
			]
		},

		init: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.addPageNumber();
			this.formatCarouselindicators();
			this.addSlideNavigators();
		},

		removeFinalSlide: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.removeFinalSlide.call(this, true);
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		addPageNumber: function() {
			$('.js-slider-item').each(function(i,e) {
				var idPage = $(e).attr('id');
				var page = parseInt(idPage.replace("slider-item-", ""))+1;
				$(e).find('.header').prepend('<div class="single-pagination"><div class="page">'+page+'</div></div>');
			});
		},


		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			$navbarBottom.find('li').tooltip('destroy');

			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'Índice' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			var navigatorIndex = 0;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title;

				if (slide.isConcatenate) continue;

				dropDown += '<li role="presentation"><a role="menuitem">' + (navigatorIndex+1) + '. ' + stripHTML(slideTitle) + '</a></li>';
				$navbarBottom.find('li').eq(navigatorIndex).html('<span title="'+ stripHTML(slideTitle) +'">'+(navigatorIndex+1)+'</span>');
				navigatorIndex++;

			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'publisher-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator"/>')
					.end()
				.find('.dropdown').find('li')
					.on('click', function (event) {
						$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
					});

			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}
		},

		//BK15873 Quitamos la funcion getEditorStyles para que herede de parent
	};

	eli_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), eli_demoStyle.prototype);

	blink.theme.styles.eli_demo = eli_demoStyle;

})( blink );

$(document).ready(function () {

    $('.item').find('.header').find('.title')
		.filter(function () {
			return $(this).find('.empty').length;
		}).hideBlink();

    $('.item').find('.header').find('.title')
		.filter(function () {
			return !$(this).find('.empty').length;
		})
		.each(function () {
			var $header = $(this).find('h3');
			$header.length && $header.html($header.html().replace(' ', ''));
		});

	// BK-8433 cambiamos el logo de las slides por el del dominio
	var src_logo = $('.content_type_clase_eli_demo').find('.logo_slide').attr('logo_dominio');
	if (typeof(src_logo) != 'undefined' && src_logo && src_logo != '' && src_logo.indexOf('gif1x1.gif') == -1) {
		$('.content_type_clase_eli_demo').find('.logo-publisher').css('background-image', "url('"+src_logo+"')");
	}
});
