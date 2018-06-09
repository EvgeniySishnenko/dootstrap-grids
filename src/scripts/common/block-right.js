function blockRight () {

    $('.blog-right--icon').on('click', function() {
        $('.block-right').toggleClass('active-block-right');
        $('.blog-right--icon').toggleClass('active-icon');
    });

}

module.exports = blockRight;