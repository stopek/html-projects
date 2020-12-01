$(document).ready(function () {
    var box = $("#jq-menu");

    //mouseenter lub click, w zależności od potrzeby
    $(".flower-menu").unbind('mouseenter').bind('mouseenter', function (e) {
        box.slideToggle().unbind('mouseleave').bind('mouseleave', function () {
            box.slideToggle();
        });

        e.preventDefault();
    });
});