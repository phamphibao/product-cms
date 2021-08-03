
$(document).ready(function () {
    $('.input-control').focus(function (e) {
        let span = $(this).parents('.from-gr').find('.span-input');
        $(span).addClass('active');
    });
    
    $('.input-control').focusout(function (e) {
        let span = $(this).parents('.from-gr').find('.span-input');

        if($(this).val()){
            $(span).addClass('active');
        }else{
            $(span).removeClass('active');
        }
    });
});