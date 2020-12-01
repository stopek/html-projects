var hokej = {
    init: function () {
        hokej.scroll();
        hokej.secretMenu();
        hokej.setter();

        hokej.setHeight();
        hokej.menu();
        console.log('init');
    },
    scroll: function () {
        jQuery(window).unbind('scroll resize').bind('scroll resize', function () {
            hokej.shortMenu(jQuery(window).scrollTop());
            hokej.turnOffSecretMenu();
            hokej.setHeight();
            console.log('scroll');
        });

        return true;
    },
    menu: function () {
        jQuery("#secret-content ul li").unbind('click').bind('click', function (event) {
            var id = jQuery(this).find('a').attr('rel');
            if (id) {
                event.preventDefault();
            }

            jQuery('html,body').stop().animate({
                scrollTop: jQuery("#" + id).offset().top - 100
            }, 'slow');
        });

        return true;
    },
    setter: function () {

    },
    setHeight: function () {
        jQuery(".height-setter-important").css('height', jQuery(window).height() + 'px');
        jQuery(".height-setter").css('min-height', jQuery(window).height() + 'px');

        console.log(jQuery(window).height() + 'px');
    },
    secretMenu: function () {
        jQuery("div#secret-button").unbind('click').bind('click', function () {
            jQuery("div#secret-content").fadeToggle();
        });
    },
    turnOffSecretMenu: function () {
        jQuery("div#secret-content").fadeOut();
    },
    shortMenu: function (iPosAtTop) {
        var oElement = jQuery("header nav");
        if (iPosAtTop > 120) {
            if (!oElement.hasClass('fixed')) {
                console.log('add fixed');
                oElement.hide().addClass('fixed').slideDown('fast');
            }
        } else {
            console.log('remove fixed');
            oElement.removeClass('fixed');
        }

        return true;
    },
};


jQuery(document).ready(hokej.init);