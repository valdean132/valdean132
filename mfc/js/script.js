$(document).ready(function() {
    // Fade-in on scroll triggers
    const checkScroll = () => {
        $('.fade-in').each(function() {
            const topIdx = $(this).offset().top + $(this).outerHeight() / 5;
            const bottomWin = $(window).scrollTop() + $(window).height();
            if (bottomWin > topIdx) {
                $(this).addClass('active');
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    };

    // Initial styles for fade-in
    $('.fade-in').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.8s'
    });

    $(window).scroll(checkScroll);
    checkScroll();

    // Mobile menu toggle
    const navToggle = $('#mobile-menu');
    const navLinks = $('.nav-links');

    navToggle.on('click', function() {
        navLinks.toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close menu on link click
    $('.nav-links a').on('click', function() {
        navLinks.removeClass('active');
        navToggle.find('i').removeClass('fa-times').addClass('fa-bars');
    });

    // Smooth scroll for anchors
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800);
        }
    });
});
