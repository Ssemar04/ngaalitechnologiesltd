(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

/**
* Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

/*  
  ----------------------------------
  -----      JS for Glide      -----
  ----------------------------------
*/ 



// Select all elements with the class 'glide'
const glideElements = document.querySelectorAll('.glide');

// Loop through each element and create a Glide instance
if (glideElements.length > 0) {
    // Create an object to store the options for each class
    const glideOptions = {
        glideHighLinear: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            focusAt: 'center',
            startAt: 4,
            perView: 6,
            breakpoints: {
                1400: { perView: 5 },
                1200: { perView: 4 },
                992: { perView: 3 },
                768: { perView: 2 },
                576: { perView: 1 }
            },
            autoplay: true,
            animationDuration: 3000,
            animationTimingFunc: 'linear'
        },

        glideLowGap: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            autoplay: 3000,
            gap: 20,
            breakpoints: {
                1400: { perView: 2 },
                1200: { perView: 2 },
                992: { perView: 1 },
                768: { perView: 1 },
                576: { perView: 1 }
            }
        },

        // Add more classes and options as needed
    };

    glideElements.forEach(element => {
        const classList = element.classList;
        const className = classList[1];
        const option = glideOptions[className];

        // Create and mount the Glide instance
        const glide = new Glide(element, option);
        glide.mount();
    });

}

