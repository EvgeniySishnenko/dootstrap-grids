function humberger () {
    $('.gamb-btn').click(function () {

        $(this).toggleClass('active_gamb_btn');
        $('.top-nav--list-mobile').toggleClass('menu-mobile--active');

    });
}
module.exports = humberger;