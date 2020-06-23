$(function(){
    window_height = $(window).height();
    window_width = $(document).width();
    $('.container').height(window_height);
    $('.page').height(window_height-$('.header').height())
    $(window).resize(function() {
        window_height = $(window).height();
        window_width = $(document).width();
        $('.container').height(window_height);
        $('.page').height(window_height-$('.header').height())
    })
});