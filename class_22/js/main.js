$(document).ready(function(){
    $('.acrdn-heading').click(function() {

        if($(this).hasClass("active")){
            return;
        };

        // To close existing block.
        let activeHeadingAttr = $(".active").attr("acrdn-name");
        $(".active").removeClass("active");
        $('[acrdn-content="' + activeHeadingAttr + '"]').slideUp();
        
        
        
        // To open new block.
        let headingAttr = $(this).attr("acrdn-name");
        $(this).addClass("active");
        $('[acrdn-content="' + headingAttr + '"]').slideDown();
    });

});



