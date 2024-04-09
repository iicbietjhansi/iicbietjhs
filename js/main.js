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
   // news and event js
    document.addEventListener('DOMContentLoaded', (event) => {
        const list = document.getElementById('eventsList');
        let scrollAmount = 0;
        const scrollStep = 0.5; // Adjust for a slower scroll speed
        const scrollInterval = 30; // Adjust interval for smoother scrolling
    
        let autoScrollInterval = setInterval(autoScroll, scrollInterval);
    
        function autoScroll() {
            if (scrollAmount >= list.scrollHeight - list.clientHeight) {
                scrollAmount = 0; // Resets to top when end is reached
            }
            list.scrollTop = scrollAmount;
            scrollAmount += scrollStep; // Use scrollStep for consistent, gradual scrolling
        }
    
        // Pause auto-scrolling when user hovers over the list
        list.addEventListener('mouseover', () => {
            clearInterval(autoScrollInterval);
        });
    
        // Resume auto-scrolling when user stops interacting
        list.addEventListener('mouseleave', () => {
            autoScrollInterval = setInterval(autoScroll, scrollInterval);
        });
    
        // Allow manual scrolling to pause auto-scroll
        // list.addEventListener('scroll', () => {
        //     clearInterval(autoScrollInterval);
        //     scrollAmount = list.scrollTop; // Update scroll amount to current position
        //     // Resume after no scroll events for 2000 milliseconds
        //     setTimeout(() => {
        //         autoScrollInterval = setInterval(autoScroll, scrollInterval);
        //     }, 2000);
        // });
    });
    
    // news and event js end

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
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


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

