// JavaScript Document

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
    });
    $('.bestseller_sec').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText : ['',''],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    /** move scroll section **/
    $(document).on("click", ".headerNav_list li a", function(){
        if($(window).width() > 767){
            var hrefVal = $(this).attr("data-href");
            $('html, body').animate({
                scrollTop: $(hrefVal).offset().top - 50 
            }, 'slow');
        } else {
            var hrefVal = $(this).attr("data-href");
            $('html, body').animate({
                scrollTop: $(hrefVal).offset().top - 130 
            }, 'slow');
            $(".headerNav_list").fadeOut();
            $(".headerNav").removeClass("navActive");
            $("body, html").css({
                'overflow':'auto',
                'height': 'auto',
                'width' :'100%'
            });
        }
    });
    /** move scroll section on logo click **/
    $(document).on("click", ".logo a", function(){
        let hrefVal = $(this).attr("data-href");
        $('html, body').animate({
            scrollTop: $(hrefVal).offset().top 
        }, 'slow');
    });
    /** move scroll section contact **/
    $(document).on("click", ".contactUsLink", function(){
        let hrefVal = $(this).attr("data-href");
        $('html, body').animate({
            scrollTop: $(hrefVal).offset().top - 50 
        }, 'slow');
    });
    
    /** stickey header js **/
    $(window).on("scroll", function () {
        if($(document).scrollTop() > 0){
            $('#header_nav').addClass("stickey");
        } else {
            $('#header_nav').removeClass("stickey");
        }
    });
    
    /** Mobile navigation tab **/
    $(document).on("click", ".mobileNav_Btn", function(){
        if($(".headerNav").hasClass("navActive")){
            $(".headerNav_list").fadeOut();
            $(".headerNav").removeClass("navActive");
            $("body, html").css({
                'overflow':'auto',
                'height': 'auto',
                'width' :'100%'
            });
        }
        else{
            $(".headerNav_list").fadeIn(1000);
            $(".headerNav").addClass("navActive");
            $("body, html").css({
                'overflow':'hidden',
                'height': '100vh',
                'width' :'100vw'
            });
        }
    });

    localStorage.removeItem('login_email');
    localStorage.removeItem('login_pass');
});