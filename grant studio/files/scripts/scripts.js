jQuery(document).ready(function () {
    var $el = jQuery("#top_show_menu");
    $el.unbind('click').bind('click', function (e) {
        $el.parent().find('ul').animate({
            height: "toggle",
            opacity: "toggle"
        });
        e.preventDefault();
    });


    var $el2 = jQuery("#bottom_show_menu");
    $el2.unbind('click').bind('click', function (e) {
        $el2.parent().find('ul').animate({
            height: "toggle",
            opacity: "toggle"
        });
        e.preventDefault();
    });
});