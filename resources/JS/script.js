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
    $('.js--scroll-to-home').click(function(){
        $('html,body').animate({scrollTop: $('header').offset().top - 100}, 1000);
    });
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
        var logo= $('.headerLogo')
        // logo.toggle();
        nav.slideToggle(200,()=>{
            if(icon.hasClass('ion-navicon-round')){
                logo.css({display: "block"})
            }
        });
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            logo.css({display: "none"});

        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            // setInterval(()=>{logo.css({display: "block"})}, 200);
            // logo.css({display: "block"})

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



/*Projects hovering*/
    $('.project-photo').hover(
        ()=>{
        // $('.project-hover').css('visibility', 'visible');
            try{
                event.target.nextElementSibling.style.display = "block"
                event.target.setAttribute("id", "project-photo-selected")

            }
            catch(error){
                console.log(error);
            }
        },
        ()=>{
            try{
                $('.project-hover').css('display', 'none');
                $('.project-photo img').removeAttr('id');
                // event.target.removeAttribute('id');
            }
            catch(error){
                console.log(error); 
            }
    });

 

        /* stop form from submitting normally */
    
    $('.emailSubmit').click((event)=>{
        
        var inpObj = document.getElementById('email').value;
        var inpObj2 = document.getElementById('message');
        var inpObj3 = document.getElementById('name');
        if (!inpObj3.validity.valid) {
            document.getElementById('name_m').innerHTML = "Please include your name"; 
            return
        }else{
            document.getElementById('name_m').innerHTML = null;  

        }
        if (!inpObj.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            document.getElementById('email_m').innerHTML = "Please type a valid email"; 
            return
        } else{
            document.getElementById('email_m').innerHTML = null;  

        }
        if (!inpObj2.checkValidity()) {
            document.getElementById('message_m').innerHTML = "Please include a message"; 
            return
        } else{
            document.getElementById('message_m').innerHTML = null;  

        }

        event.preventDefault();
        $('*').css({ 'cursor': 'progress' });
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
                    $('*').css({ 'cursor': 'default' });

                }
                else{
                    $('.modal-content p').text('Something went wrong, please try later')
                    $('.modal').show();
                    $('*').css({ 'cursor': 'default' });

                }
            },
            error: function(error){
                $('.modal-content p').text("Please try later");
                $('.modal').show();
                $('*').css({ 'cursor': 'default' });

            }

        });
        
        
    });
    $('body').click(function() {
        if(event.target.className === "modal"){
            $('.modal').css({display: 'none'});
        }
    });

    $('.close').click(()=>{
        $('.modal').hide();
    });
    
    //Form Validation:




}









