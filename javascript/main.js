/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * flatIconboxCarousel
  * blogCarousel
  * ClientCarousel
  * flatTeam
  * googleMap
  * portfolioIsotope
  * goTop
  * parallax
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed_s1 = function() {
        var nav = $('.header.bg-color');
            if ( nav.size() !== 0 ) {

            $(window).on('load', function(){
            var header = $('.header.bg-color');           
            var offsetTop = $('.header.bg-color').offset().top;
            var headerHeight = $('.header.bg-color').height();
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                buffer.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop  ) {
                        $('.header.bg-color').addClass('fixed-header');
                        buffer.show();
                    } else {
                        $('.header.bg-color').removeClass('fixed-header');
                        buffer.hide();
                    }
                })
           
            }); // headerFixed style1
        }
    };

    var headerFixed_s2 = function() {
            var nav = $('.header.transparent');            
            if ( nav.size() !== 0 ) {
                var top_height = $('.top').height();                

                $(window).on('load scroll resize', function(){
                    if ( $(window).scrollTop() >= top_height ) {                        
                        $('.header.transparent').addClass('fixed-header');                        
                    } else {
                        $('.header.transparent').removeClass('fixed-header');                       
                    }                    
                })
            } 
      
    }; // headerFixed style2


    var IconboxSlider = function() {
        $(window).load(function() {
            $('.iconbox-slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true,
                manualControls: ".flex-control-nav li"
            });
        });
    };


    var ClientCarousel = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.flat-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: $('.flat-carousel').data('dots'),                     
                    autoplay: $('.flat-carousel').data('auto'), 
                     margin: 30,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 2
                        },
                        480:{
                            items: 3
                        },
                        767:{
                            items: 3
                        },
                        991:{
                            items: 4
                        },
                        1200: {
                            items: $('.flat-carousel').data('item')
                        }
                    }
                });
            }
        });
    };

    var iconboxCarousel = function() {
        $('.iconbox-slider').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.slides').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,                     
                    autoplay: $('.slides').data('auto'), 
                     margin: 0,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: $('.slides').data('item')
                        }
                    }
                });
            }
        });
    };

    var Testimonials = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.flat-testimonials-post').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: $('.flat-testimonials-post').data('dots'),                     
                    autoplay: $('.flat-testimonials-post').data('auto'), 
                     margin: 30,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: $('.flat-testimonials-post').data('item')
                        }
                    }
                });
            }
        });
    };

    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.5);
            $('.parallax2').parallax("50%", 0.5);
            $('.parallax3').parallax("50%", 0.5);          
        }
    };
     
        
    var flatCounter = function() {
        $('.counter').on('on-appear', function() { 
            $(this).find('.numb-count').each(function() { 
                var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
       });
    };

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
            }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            });
        });
    };  

   
    var googleMap = function() {            
        if ( $().gmap3 ) {  
            $(".map").gmap3({
                map:{
                    options:{
                        zoom: 14,
                        mapTypeId: 'themesflat_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['themesflat_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng:{
                    address:  $('.flat-maps').data('address'),
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: $('.flat-maps').data('images')
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "themesflat_style",
                    options:{
                        name: "Themesflat Map"
                    },
                    styles:[
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#444444"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 45
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#46bcec"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                },  
            });
        }
        $('.map').css( 'height', $('.flat-maps').data('height') );
    };

    var progressBar = function() {        
        $('.progress-bar').on('on-appear', function() {
            $(this).each(function() {
                var percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );

                $(this).parent('.flat-progress').find('.perc').addClass('show').animate({
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
            });
        });
    };

    var flexslider_BlockQuote = function() {
        $(window).load(function() {
            $('.flat-block-quote-slider').flexslider({
                animation: "slide",
                controlNav: true,
                directionNav: false,
                manualControls: ".flex-control-nav li"
            });
        });
    };

    var portfolioIsotope = function() {         
        if ( $().isotope ) {           
            var $container = $('.portfolio-wrap');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.item',
                    transitionDuration: '1s'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });

            $('.flat-portfolio .load-more a').on('click', function(e) {
                e.preventDefault();

                var el = $(this),
                    url = el.attr('href'),
                    page = parseInt(el.attr('data-page'), 10);

                el.addClass('loading').text('Loading...');

                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "html",
                    async: false,   // wait result
                    data : { page : page }
                })
                .done(function (data) {
                    if ( data != null ) {                      
                        var newitem = $(data);
                        $container.append(newitem).isotope('appended', newitem);
                        el.removeClass('loading').text('Load more');
                        page = page + 1;
                        el.attr({'data-page': page, 'href': './ajax/p' + page + '.html'});
                    }
                })
                .fail(function () {
                    el.text('No more portfolio to load.');
                })
            });
        };
    };

    var Slide_s1 = function() {
        $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true,
                manualControls: ".flex-control-nav li"
            });
        });
    };

    var flatAccordion = function() {
        var args = {duration: 600};
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.flat-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.flat-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };

    
    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 

        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    }; 
    
    var topSearch = function () {
      $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 's' ) ) {
                $('.top-search').removeClass('show');                
            } 
        });

        $('.show-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.show-search').on('click', function (event) {
            if(!$('.top-search').hasClass( "show" )) {
                $('.top-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.top-search').removeClass('show');
                event.preventDefault();

            if( !$('.show-search' ).hasClass( "active" ) )
                $( '.show-search' ).addClass( 'active' );
            else
                $( '.show-search' ).removeClass( 'active' );
        });   
   
    } 

    var swClick = function () {
        function activeLayout () {
                       
            $(".switcher-container h2 a" ).addClass( "active" );
            
            $(".switcher-container" ).on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');  
                $('body').css({'background': '#f6f6f6' });                
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "display": "block",  "z-index": "10"});
            }).on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "display": "none", "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({'background': '#fff' });
                return false;
            })       
        }        

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout(); 
        activePattern();
    }

    var removePreloader = function() { 
        $(window).load(function() { 

            $('.preloader').css('opacity', 0);
            setTimeout(function() {
                $('.preloader').hide(); }, 1000           
            ); 
        }); 
         
    };

    

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {          
            
            headerFixed_s1();
            headerFixed_s2();
        }          
        responsiveMenu();
        //IconboxSlider();
        swClick();
        ClientCarousel();
        iconboxCarousel();
        Testimonials();
        parallax();
        detectViewport();
        flatCounter();        
        googleMap();
        progressBar();
        flexslider_BlockQuote();
        portfolioIsotope();
        Slide_s1();
        flatAccordion();
        goTop();
        topSearch();        
        removePreloader();

   	});

})(jQuery);