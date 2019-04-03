/* -----------------------------------------------
					Js Main
--------------------------------------------------

    Template Name: Leila - Personal Portfolio Template
    Author: Malyarchuk
    Copyright: 2019

--------------------------------------------------

Table of Content

	1. Preloader
	2. Menu and Page
	3. Portfolio Image Link
	4. Portfolio Video Link
	5. About Video Link
	6. Testimonials OwlCarousel
	7. YouTube Video
	8. Validate Contact Form
	9. Google Map

----------------------------------- */

$(window).on('load', function() {
		
	/* -----------------------------------
				1. Preloader
	----------------------------------- */
	$("#preloader").delay(1000).fadeOut();
	
});

$(document).ready(function() {
    "use strict";
	
	/* -----------------------------------
	      2. Menu and Page Start
	----------------------------------- */
	var $menu_but = '.but-about, .but-resume, .but-portfolio, .but-blog, .but-contact';
	var $menu_all = '.but-menu, .but-about, .but-resume, .but-portfolio';

	$('.but-menu').on('click', function() {
		$(this).toggleClass('menu-toggle');

		// About Button
		setTimeout(function() {
			$('.but-about').toggleClass('about-toggle');
		}, 100);

		// Resume Button
		setTimeout(function() {
			$('.but-resume').toggleClass('resume-toggle');
		}, 200);

		// Portfolio Button
		setTimeout(function() {
			$('.but-portfolio').toggleClass('portfolio-toggle');
		}, 300);

		// Blog Button
		setTimeout(function() {
			$('.but-blog').toggleClass('blog-toggle');
		}, 400);
	
		// Contact Button
		setTimeout(function() {
			$('.but-contact').toggleClass('contact-toggle');
		}, 500);
	});
	
	$($menu_all).on('click', function() {
		$(this).siblings().css({'z-index': '5'});
		$(this).css({'z-index': '10'});
	});

	// Full Page Layout
	$('.menu-item i').on('click', function() {

		setTimeout(function() {
			$('.page-background').addClass('scale');
		}, 500);

		$($menu_but).addClass('hide');
	
	});

	// Close Menu
	$('.close-page').on('click', function() {
		$('.but-menu').addClass('menu-toggle');

		$(this).parents('.section').fadeOut("slow");
			
		setTimeout(function() {
			$('.page-background').removeClass('scale');
			$('i.about-show, i.resume-show, i.portfolio-show, i.blog-show, i.contact-show').fadeIn("slow");
		}, 400);
			
		setTimeout(function() {
			$($menu_but).css({'z-index': '4'}).removeClass('hide');
 	 	}, 700);

		$('.page-background').css({'z-index': '2'});
		
	});

	// Home Full Page Layout 
	$('i.about-show').on('click', function() {
			
		setTimeout(function() {
			$('i.about-show').fadeOut("fast");
		}, 500);
			
		setTimeout(function() {
			$('.about').fadeIn("slow");
		}, 1000);
			
	});

	// Resume Full Page Layout 
	$('i.resume-show').on('click', function() {
		
		setTimeout(function() {	
			$('i.resume-show').fadeOut("fast");
		}, 500);
			
		setTimeout(function() {
			$('.resume').fadeIn("slow");
		}, 1000);
		
	});

	// Portfolio Full Page Layout 
	$('i.portfolio-show').on('click', function() {
			
		setTimeout(function() {
			$('i.portfolio-show').fadeOut("fast");
		}, 500);
			
		setTimeout(function() {
			$('.portfolio').fadeIn("slow");
			
			/* ----- Isotope Portfolio ----- */
			var $item = $(".portfolio-items"),
            	$filters = $('.portfolio-filter ul li');
        		$item.isotope();

        	$filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            	$(".portfolio-items").isotope({
                	filter: selector
            	});
        	});
			
		}, 1000);
		
	});
	
	// Blog Full Page Layout
	$('i.blog-show').on('click', function() {
			
		setTimeout(function() {
			$('i.blog-show').fadeOut("fast");
		}, 500);
			
		setTimeout(function() {
			$('.blog').fadeIn("slow");
		}, 1000);
	});
	
	// Contact Full Page Layout
	$('i.contact-show').on('click', function(){
			
		setTimeout(function() {
			$('i.contact-show').fadeOut("fast");
		}, 500);
			
		setTimeout(function() {
			$('.contact').fadeIn("slow");
		}, 1000);
	});
	
	/* -----------------------------------
	      3. Portfolio Image Link
	----------------------------------- */
	$(".portfolio-items .image-link").magnificPopup({
		type: "image"
	});
	
	/* -----------------------------------
	      4. Portfolio Video Link
	----------------------------------- */
	$(".portfolio-items .video-link").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	      5. About Video Link
	----------------------------------- */
	$(".about .video .video-link").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	      6. Testimonials OwlCarousel
	----------------------------------- */
	$(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
	
	/* -----------------------------------
	      	7. YouTube Video
	----------------------------------- */
	$("#play-video").YTPlayer();
	
	/* -----------------------------------
	    8. Validate Contact Form
	----------------------------------- */
	$('.validate-input .input').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })
    });
	
    var input = $('.validate-input .input');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    });

    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
        $(thisAlert).append('<i class="fas fa-times close-validate"></i>')
        $('.close-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.close-validate').remove();
    }
	
	/* Google Map Setup */
    if($('#map').length) {
        initMap();
     };
	
});

/* -----------------------------------
  		9. Google Map
----------------------------------- */
function initMap() {
    var latitude = $("#map").data('latitude'),
        longitude = $("#map").data('longitude'),
        zoom = $("#map").data('zoom'),
        cordinates = new google.maps.LatLng(latitude, longitude);

    var styles = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}];
	
        var mapOptions = {
        zoom: zoom,
        center: cordinates,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: styles
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: cordinates,
        map: map,
        title: "We are here!"
    });
}