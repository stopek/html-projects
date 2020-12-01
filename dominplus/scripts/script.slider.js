$(document).ready(function () {
    var owl = $("ul#_slider");
    owl.owlCarousel({
        itemsScaleUp: false,
        itemsCustom: [
            [0, 1],
            [650, 1],
            [730, 2],
            [1000, 3]
        ],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
    });
    // Custom Navigation Events
    $(".next").click(function (e) {
        owl.trigger('owl.next');
        e.preventDefault();
    });
    $(".prev").click(function (e) {
        owl.trigger('owl.prev');
        e.preventDefault();
    });
    
    
    $("#JQ_adv").click(function(e) {
        var el = $("#search_box");
        
        if (el.hasClass('_hidden')) {
            el.removeClass('_hidden');
        } else {
            el.addClass('_hidden');
        }
        
        
        
        e.preventDefault();
    });
});