jQuery(document).ready(function($) {
    var body = $('body');
    /* ======= Scrollspy ======= */
    body.scrollspy({ target: '#header', offset: 400 });

    /* ======= Fixed header when scrolled ======= */

    $(window).on('scroll', function() {
         $('#header').toggleClass('navbar-fixed-top', $(window).scrollTop() > 50);
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        body.scrollTo(target, 800, { offset: -70, axis: 'y', easing: 'easeOutQuad' });

        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var currentLanguage = readCookie("language") || 'ru';
    $('#language').val(currentLanguage);

    body.on('change', '#language', function() {
        var language = $(this).val();
        var url = window.location.href.split('?')[0];
        window.location.href = url + '?locale=' + language;
    })
});
