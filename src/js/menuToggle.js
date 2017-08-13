$(document).ready(function(){
    $('#navIcon').click(function(){
        $(this).toggleClass('open');
        if($(this).hasClass('open')) {
            $(this).parents('.header').find('.navbar-bg').css('width', '100%');
        } else {
            $(this).parents('.header').find('.navbar-bg').css('width', '0');
        }
    });
});