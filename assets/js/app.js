/*------js-menu--------*/

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('Active');
});

/*------caousel--------*/

;(function( $ ) {

	var $hCarousel = $( '#header-carousel' );
	var $pCarousel = $( '#product-carousel' );
	var $nCarousel = $( '#news-carousel' );
	var $d = $( '#date' );

	$hCarousel.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1800,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive: {
			0:{
				items: 1
			},
			480:{
				items: 1
			},
			768:{
				items: 1
			}
		}
	});

	$pCarousel.owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1800,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		center: true,
		responsive: {
			0:{
				items: 1
			},
			480:{
				items: 2
			},
			768:{
				items: 3
			}
		}
	});

	$nCarousel.owlCarousel({
		items: 2,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplaySpeed: 1800,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0:{
				items: 1
			},
			1200:{
				items: 2
			}
		}
	});

})(jQuery, window, document);



