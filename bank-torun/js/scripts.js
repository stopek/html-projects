var b = {
  init: function () {
    b.form();
    b.fullMessage();
  },
  fullMessage: function () {
    jQuery("#JQ_fullmessage, #JQ_fullmessagecontent .close").click(function (e) {
      e.preventDefault();

      jQuery("#JQ_fullmessagecontent").fadeToggle();

    });
  },
  form: function () {
    jQuery("#form").submit(function (e) {
      var bErr = false;
      var aErr = [];
      var sEmail = jQuery(this).find('#JQ_email').val();
      var sPhone = jQuery(this).find('#JQ_phone').val();
      var sName = jQuery(this).find('#JQ_name').val();
      var bRulez = jQuery(this).find('#JQ_rulez').is(':checked');
      //var oButton = jQuery(this).find('input[type=submit]');

      if (bRulez === false) {
        bErr = true;
        aErr.push("Musisz zaakceptować regulamin.");
      }

      if (!b.validatePhone(sPhone)) {
        bErr = true;
        aErr.push("Nieprawidłowo wypełniony numer telefou.");
      }

      if (!b.validateEmail(sEmail) && sEmail) {
        bErr = true;
        aErr.push("Nieprawidłowo wypełniony adres email.");
      }

      if (!sName) {
        bErr = true;
        aErr.push("Pole z imieniem błędnie wypełnione.");
      }


      if (bErr === true) {
        alert(aErr.join('\n'));
        e.preventDefault();
        return false;
      }
      return true;
    });
    return true;
  },
  validatePhone: function (str) {
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  validateEmail: function (str) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(str);
  }
};
jQuery(document).ready(b.init);