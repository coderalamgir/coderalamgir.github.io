$(document).ready(function(){
    $(".header-top").sticky({topSpacing:0});
    $('.mainmenu').slicknav();
    $.scrollUp({
        scrollText:'Instant Quote',
    });
    /* SLIDER JQUERY*/
    var slider = tns({
        container: '.slider-list',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:true,
        controls:true,
        navPosition:"bottom",
        autoplayButtonOutput:false,
        controlsText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    });
    /* CREATIVE JQUERY*/
    var slider = tns({
        container: '.creative-list',
        items: 3,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"top",
    });
    var slider = tns({
        container: '.team-list',
        items: 3,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"top",
    });
    var slider = tns({
        container: '.responsive-list',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag:true,
        nav:false,
        controlsPosition:"top",
        controls:false
    });
      








});