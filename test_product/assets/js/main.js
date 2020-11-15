(function ($) {

    /*-- product size selection --*/
    $('.product_variant.size > ul > li > a').on('click', function(){
        var pElement = $(this).parent('li');
        var ppElement = $(this).parent('li').parent('ul');
        var selSize = $(this).text();

        //if this is already size select, remove it
        if(ppElement.hasClass('selected')){
            $(ppElement.children('li')).removeClass('selected');
            $('.addSizeLab').remove();
        }
        //add class, modify element format
        pElement.addClass('selected');
        ppElement.addClass('selected');

        // add selected size label
        $('.product_variant.lab').append('<lable class="addSizeLab">' + selSize + '</lable>');
    });

    // user device detection
    function isPCScr(){
        var userDevice = navigator.userAgent;
        var Devices = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        var pcFlag = true;
        for (var i = 0; i < Devices.length; i++){
            if (userDevice.indexOf(Devices[i]) > 0){
                pcFlag = false;
                break;
            }
        }
        return pcFlag;
    }

    /*---mini cart activation---*/
    if(isPCScr()){
        $('.mini_cart_wrapper > a').hover(function(){
            $('.mini_cart').addClass('active')
        });
    }else{
        $('.mini_cart_wrapper > a').on('click', function(){
            $('.mini_cart').addClass('active')
        });
    }

    $('.mini_cart_close > a').on('click', function(){
        $('.mini_cart').removeClass('active')
    });


})(jQuery);	
