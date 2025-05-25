$(document).ready(function(){

    $('.tab_practice h1#slideUp').click(function(){
        $('.slideUp').slideUp('slow',function(){
            // alert('Slide Up is Completed!')
        });
    });

    $('.tab_practice h1#slideDown').click(function(){
        $('.tab_content.slideDown').slideDown('slow',function(){
            // alert("Slide down is completed !")
        });
    });

    $('.tab_practice h1#slideToggle').click(function(){
        $('.tab_content.slideToggle').slideToggle();
    });


    $('.form').click(function(){
        $('.form_fill').show('slow');
    });





});