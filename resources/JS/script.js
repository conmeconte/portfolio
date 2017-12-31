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
  offset: '25%'
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
    
}