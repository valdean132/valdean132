$(document).ready(function () {
    const navbar = $('#navbar');
    const themeToggle = $('#theme-toggle');
    const html = $('html');

    // Floating Navbar Logic
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }

        // Fade-in effect
        $('.fade-in').each(function () {
            const topIdx = $(this).offset().top + $(this).outerHeight() / 5;
            const bottomWin = $(window).scrollTop() + $(window).height();
            if (bottomWin > topIdx) {
                $(this).addClass('active');
            }
        });
    });

    // Theme Toggle
    themeToggle.click(function () {
        if (html.attr('data-bs-theme') === 'dark') {
            html.attr('data-bs-theme', 'light');
            $(this).find('i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            html.attr('data-bs-theme', 'dark');
            $(this).find('i').removeClass('fa-sun').addClass('fa-moon');
        }
    });

    // Initial trigger
    $(window).trigger('scroll');

    // Smooth Scroll
    $('.nav-link, .dropdown-item, .contact-card, .links-btn').click(function (e) {
        if (this.hash !== "" && this.hash !== undefined) {
            e.preventDefault();
            const hash = this.hash;
            if ($(hash).length) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100
                }, 800);
            }

            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
        }
    });
});
