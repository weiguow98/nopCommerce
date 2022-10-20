$(document).ready(function () {



    var numItems = $('li.mo_saml_mo_saml_fancyTab').length;


    if (numItems == 12) {
        $("li.mo_saml_fancyTab").width('8.3%');
    }
    if (numItems == 11) {
        $("li.mo_saml_fancyTab").width('9%');
    }
    if (numItems == 10) {
        $("li.mo_saml_fancyTab").width('10%');
    }
    if (numItems == 9) {
        $("li.mo_saml_fancyTab").width('11.1%');
    }
    if (numItems == 8) {
        $("li.mo_saml_fancyTab").width('12.5%');
    }
    if (numItems == 7) {
        $("li.mo_saml_fancyTab").width('14.2%');
    }
    if (numItems == 6) {
        $("li.mo_saml_fancyTab").width('16.666666666666667%');
    }
    if (numItems == 5) {
        $("li.mo_saml_fancyTab").width('20%');
    }
    if (numItems == 4) {
        $("li.mo_saml_fancyTab").width('25%');
    }
    if (numItems == 3) {
        $("li.mo_saml_fancyTab").width('33.3%');
    }
    if (numItems == 2) {
        $("li.mo_saml_fancyTab").width('50%');
    }




});

$(window).load(function () {

    $('.mo_saml_fancyTabs').each(function () {

        var highestBox = 0;
        $('.mo_saml_fancyTab a', this).each(function () {

            if ($(this).height() > highestBox)
                highestBox = $(this).height();
        });

        $('.mo_saml_fancyTab a', this).height(highestBox);

    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});