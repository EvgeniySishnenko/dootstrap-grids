function overlay () {

    var images = $('img');
    var images_total_count = images.length;
    var images_loaded_count = 0;
    var preloader = $('.preloader');

    $('.overlay').on('click', function(){
        $('.zoom-overlay').fadeIn();
        var imageLink = $(this).attr('data-image');
        $('.zoom-overlay-img').attr('src', imageLink);

        for (var i = 0; i < images_total_count; i++) {
            var image_clone = new Image();
            image_clone.onload = image_loaded;
            image_clone.onerror = image_loaded;
            image_clone.src = images[i].src;

        }
        function image_loaded() {
            images_loaded_count++;
            if (images_loaded_count >= images_total_count) {
                setTimeout(function () {

                    if ($(".done")) {

                        preloader.addClass("done");
                        $('.zoom-overlay-conteiner').addClass('zoom-overlay-conteiner--active');
                        $('.zoom-overlay-img').addClass('zoom-overlay-img--active');
                    }

                }, 1000);
            }

        }

    });
    $('.close').on('click', function() {
        $('.zoom-overlay').hide();
        preloader.removeClass("done");
        $('.zoom-overlay-conteiner').removeClass('zoom-overlay-conteiner--active');
        $('.zoom-overlay-img').removeClass('zoom-overlay-img--active');
    });
}
module.exports = overlay;