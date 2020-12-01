$(document).ready(function () {
    var box = $("#cookie-box");

    box.find('a').unbind('click').bind('click', function () {
        box.fadeOut();
    });
});