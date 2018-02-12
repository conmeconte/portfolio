$(document).ready(initializeApp);


function initializeApp() {

    /* For stikcy navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky')
        } 
    }, {
  offset: '30%'
    });

    /* button scroll                   */
    $('.js--scroll-to-projects').click(function(){
        $('html,body').animate({scrollTop: $('.section-projects').offset().top - 100}, 1000);
    });
    $('.js--scroll-to-contact').click(function(){
        $('html,body').animate({scrollTop: $('.section-form').offset().top - 100}, 1000);
    });
    $('.js--scroll-to-aboutMe').click(function(){
        $('html,body').animate({scrollTop: $('.section-features').offset().top}, 1000);
    });
    


/* Animation on Scroll */   
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated pulse');
    }, {
        offset: '50%'
    })
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated swing');
    }, {
        offset: '0%'
    });
/*Mobile Nav*/

    $('.js--nav-icon').click(()=>{
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        } 

    });

    $(document).on('click',()=>{
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        if(!$(event.target).closest('.js--nav-icon').length && icon.hasClass('ion-close-round')){
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            nav.slideToggle();
        }
        if($('.modal')[0].style.display){
            $('.modal').hide();
        }
   })



/*Proejcts hovering*/
    $('.project-photo').hover(
        ()=>{
        // $('.project-hover').css('visibility', 'visible');
        try{
            event.target.nextElementSibling.style.visibility = "visible"
            event.target.setAttribute("id", "project-photo-selected")

        }
        catch(error){
            console.log(error);
        }
        // $('.project-photo img').attr('id','project-photo-selected');
    },
        ()=>{
        $('.project-hover').css('visibility', 'hidden');
        $('.project-photo img').removeAttr('id');
        // event.target.removeAttribute('id');
    });

 

        /* stop form from submitting normally */
  
    $('.emailSubmit').click((event)=>{
        event.preventDefault();

        $.ajax({
            url:"./mail_handler.php",
            method: "POST",
            data:{
                name: $('#name').val(),
                email: $('#email').val(),
                subject:$('#subject').val(),
                message: $('#message').val()
            },
            dataType: 'JSON', 
            success: function(data){
                if(data.success){
                    $('.modal-content p').text("Mail was sent out successfully, I will get back on you as soon as possible. Thank you for your interest")
                    $('.modal').show();
                }
                else{
                    $('.modal-content p').text('Something went wrong')
                }
            },
            error: function(error){
                $('.modal-content p').text(error);
            }

        });
    });

    $('.close').click(()=>{
        $('.modal').hide();
    });
    

}









