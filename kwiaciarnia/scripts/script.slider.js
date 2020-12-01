$(document).ready(function () {
    var owl = $(".see-also.slider .product-content");
    owl.owlCarousel({
        itemsScaleUp: false,
        itemsCustom: [
            [0, 1],
            [500, 1],
            [780, 3],
            [1000, 4]
        ],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
    });
});