jQuery(document).ready(function () {
  /** menu główne **/
  var $el = jQuery("nav#top ul#menu li a");
  var actualActive = jQuery("#top #menu").find("li.active");

  function clearActiveFromMenu() {
    jQuery("nav#top ul#menu").parent().parent().find('li').removeClass('active');
    return true;
  }

  function getMenuState() {
    var $state = jQuery("#show_menu");
    return $state.is(':visible');
  }

  function getWindowWidth() {
    //17px na scrollbar
    var iWidth = jQuery("body").width() + 17;
    return iWidth;
  }

  function MenuOff() {
    clearActiveFromMenu();
    jQuery(actualActive).addClass('active');

    jQuery("#hidden_menu").stop().slideUp();

    if (getMenuState() === true) {
      jQuery("#hidden_menu, #hidden_menu ul").stop().fadeOut();
      jQuery("#menu").fadeOut();
    } else {
      jQuery("#hidden_menu, #hidden_menu ul").stop().slideUp();
    }
    return true;
  }


  $el.unbind('mouseover click').bind('mouseover click', function (e) {

    var iWidth = getWindowWidth();
    var rel = jQuery(this).attr('rel');

    //nie zezwalaj na zdarzenie najechania myszką dla wersji na tablet
    if ((e.type === 'mouseover' && (iWidth > 980 && iWidth < 1350)) || !rel) {
      return true;
    }

    clearActiveFromMenu();

    jQuery(this).parent().addClass('active');

    jQuery(" #hidden_menu, #hidden_menu_content, #hidden_menu ul").stop().slideUp();
    jQuery("#hidden_menu, #hidden_menu_content, #" + rel).stop().slideDown();

    e.preventDefault();
  });

  $elc = jQuery("#show_menu");
  $elc.unbind('click').bind('click', function () {
    jQuery("#hidden_menu").stop().slideDown(function () {
      jQuery("#hidden_menu ul:first-child, #menu").fadeIn();
    });
  });


  jQuery(window).unbind('resize').bind('resize', function () {
    console.log(getWindowWidth());
    if (getMenuState() === false) {
      jQuery("#menu").show();
    } else {
      jQuery("#menu").hide();
    }
  });


  jQuery("header nav").unbind('mouseleave').bind('mouseleave', function () {
    MenuOff();
  });


  /** wyszukiwarka **/
  var $searchBox = jQuery("#hidden_search");
  var $logo = jQuery("#logo");
  //pokazujemy wyszukiwarke i wyłączamy menu, pokazujemy logo
  jQuery("#search_icon").unbind('click').bind('click', function () {
    MenuOff();
    jQuery($searchBox).show().find('input[type=text]').focus();
    jQuery($logo).css('opacity', 0);
    jQuery("#show_menu").css('opacity', 0);
    $searchBox.find('#icon a').animate({
      'opacity': 1,
      'margin-left': 0
    });
  });
  //ukrywamy wyszukiwarke, pokazujemy logo
  jQuery("#canel_search").unbind('click').bind('click', function () {
    jQuery($searchBox).fadeOut();
    jQuery($logo).css('opacity', 1);
    jQuery("#show_menu").css('opacity', 1);
    $searchBox.find('#icon a').animate({
      'opacity': 0,
      'margin-left': '-40px'
    });
    jQuery("#search_result").hide();
  });


  //dodatkowa opcja, jesli wyszukiwanie nie ma byc dynamiczne trzeba usunac to i blok #search_result
  jQuery("#hidden_search input[type=text]").unbind('keypress').bind('keypress', function () {
    jQuery("#search_result").show();
  });


  /** pokazywanie ukrytych komentarzy na karcie produktu */
  jQuery("#cart_comments_more a").unbind('click').bind('click', function (e) {
    jQuery("#cart_comments ol li.inactive").animate({
      'opacity': 'toggle',
      'height': 'toggle'
    });
    var sTemp = jQuery(this).text();
    jQuery(this).text(jQuery(this).attr('rel'));

    jQuery(this).attr('rel', sTemp);
    e.preventDefault();
  });

});