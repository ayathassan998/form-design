$(function () {

    $('.navbar_header .links li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});