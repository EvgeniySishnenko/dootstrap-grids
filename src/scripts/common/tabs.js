function tabs () {
    // $('.content-tab>article:not(":first-of-type")').addClass('hide-content');
    $('.tab-menu--item').each(function(i){
        $(this).attr('data', '#tab-' + i );
    });
    $('.content-tab article').hide();
    $('.content-tab article:first').show();
    $('.content-tab article:first').show();

    $('.tab-menu--list li').on('click', function (){
        $('.tab-menu--list li').removeClass('active-tab');
        $('.content-tab article').hide();
        $(this).addClass('active-tab');
        var selectTab = $(this).attr('data');
        $(selectTab).fadeIn();
    });

    //отработка мобильной версии табов (появление)

    $('.tab-mobile--btn').on('click', function (){   
        $('.tab-menu--list').toggleClass('tab-menu--list-active-mobile');

    });
}
module.exports = tabs;