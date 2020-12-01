jQuery(document).ready(function () {

    /**
     * dostosowywanie pozycji menu w ofercie
     * @returns {oPos.left}
     */
    function CalculateMenuPosition() {
        var $el = jQuery("#offer_menu");
        var oPos = $el.position();

        var iPxFromLeft = oPos.left;
        $el.css({
            'margin-left': -iPxFromLeft + 'px',
            'width': (500 + iPxFromLeft) + 'px'
        });

        $el.find('h2, h3, h5').css({
            'padding-left': (iPxFromLeft + 20) + 'px'
        });
        return iPxFromLeft;
    }

    CalculateMenuPosition();
    jQuery(window).resize(CalculateMenuPosition);


    /** menu w ofercie - po kliknieciu */
    jQuery("#offer_menu a.submenu_link").unbind('click').bind('click', function (e) {
        var $fElement = jQuery(this).parent().find('.submenu_content');
        if ($fElement.length == 0) {
            return true;
        }

        //zwin wszystkie
        jQuery(this).parent().parent().find('.submenu_content').stop().slideUp();

        //rozwin submenu dla kliknietego
        $fElement.stop().animate({
            'height': 'toggle',
            'opacity': 'toggle'
        });

        //usun klase active_sub z wszystkich submenu
        jQuery("#offer_menu h3, #offer_menu h4").removeClass('active_sub');

        //dodaj klase active_sub do aktualnego
        if ($fElement.css('opacity') == 0) {
            jQuery(this).find('h3, h4').addClass('active_sub');
        }

        var $parent = jQuery(this).parent().parent().parent();
        var iActive = $parent.find('h3.active_sub').length;

        //rodzic
        if (iActive != 0) {
            $parent.find('h2').stop().addClass('active');
        } else {
            $parent.find('h2').stop().removeClass('active');
        }
        e.preventDefault();
    });


    /** menu w ofercie - automatyczne pokazywanie submenu jesli h4/h3 ma klase active_sub **/
    jQuery("#offer_menu h3.active_sub, #offer_menu h4.active_sub ").parent().parent().find('.submenu_content').stop().show();


    /**
     * zakładki w ofercie
     */
    jQuery("ul#tabs li").unbind('click').bind('click', function (e) {
        var s2Show = jQuery(this).find('a').attr('rel');
        jQuery(".submenus").hide();
        jQuery("#" + s2Show).show();

        jQuery(this).parent().find('li').removeClass('active');
        jQuery(this).addClass('active');

        e.preventDefault();
    });
});