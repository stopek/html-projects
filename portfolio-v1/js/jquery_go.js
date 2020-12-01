var $g = jQuery.noConflict();
$g(document).ready(function () {

    $g(".menu2 a").append("<em></em>");

    $g(".menu2 a").hover(function () {
        $g(this).find("em").animate({opacity: "show", top: "-40"}, "slow");
        var hoverText = $g(this).attr("title");
        $g(this).find("em").text(hoverText);
    }, function () {
        $g(this).find("em").animate({opacity: "hide", top: "-85"}, "fast");
    });


});