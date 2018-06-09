function slider () {
    $('.slider-items:first').addClass('active');
   

    var coloringLine = function(index) {
        $('.btn-list')
        .find('.btn-items')
        .eq(index)
        .addClass('btn-line-active')
        .siblings()
        .removeClass('btn-line-active');
    }
    var generationLine = function() {
        $('.slider-items').each(function(){
            var line = $('<li>', {
                attr : {
                    class: 'btn-items'
                },
                html: '<div class="btn-line"></div>'
            });
            $('.btn-list').append(line);

        });
    }
    generationLine();
    $('.btn-items:first').addClass('btn-line-active');
    var moveSlide = function(container, slideNum) {
        var 
            items = container.find('.slider-items'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider-list'),
            duration = 500;
        if (reqItem.length) {
            items.animate({
                'left': -reqIndex * 100 + '%'
            }, duration, function () {
                activeSlide.removeClass('active');
                reqItem.addClass('active');
                coloringLine(slideNum);
            });
        }
    }


    $('.slider-btn').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            container = $this.closest('.slider-wrp'),
            items = container.find('.slider-items'),
            activeItem = items.filter('.active'),
            existedItem, edgeItem, reqItem;

            if ($this.hasClass('next')) { //вперед
                existedItem = activeItem.next();
                edgeItem = items.first();
            } 

            if ($this.hasClass('prev')) {// назад
                existedItem = activeItem.prev();
                edgeItem = items.last();         
            }

        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
        moveSlide(container, reqItem);   
       
            
    });

    $('body').on('click', '.btn-items', function () {
        var $this = $(this),
            container = $this.closest('.slider-wrp'),
            index = $this.index();
        moveSlide(container, index); 
        coloringLine(index);
    });
 

}

module.exports = slider;