$(document).ready(function(){
    
    
     /* Animate On Scroll
    * ------------------------------------------------------ */
    var ssAOS = function() {
        
        AOS.init( {
            easing: 'ease-in-sine',
            delay: 100,
            once: true,
        });

    };
    ssAOS();
      /* Animate On Scroll End
    * ------------------------------------------------------ */
    
    
      
         /* Navbar Change On Scroll
    * ------------------------------------------------------ */
        var scrollWindow = function() {
        $(window).scroll(function(){
        var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('nav');


        if (st > 50) {
        
        navbar.addClass('bg-white');
        navbar.addClass('fixed-top');
        navbar.removeClass('bg-transparent');
        navbar.addClass('navbar-light');
        navbar.removeClass('navbar-dark');
        
     
        
        }

        else if(st < 50) {

        navbar.removeClass('fixed-top');
        navbar.addClass('bg-transparent');
        navbar.addClass('navbar-dark');
        navbar.removeClass('navbar-light');
       
        }

        });
        };
        scrollWindow();
          /* Navbar Change On Scroll End
    * ------------------------------------------------------ */

    
    
   
    
          /* Image Pop up
    * ------------------------------------------------------ */

    var $overlay=$("<div id='overlay'></div>");

    $("body").append($overlay);

    var $image=$("<img>");

    $overlay.append($image);

    var $close=$("<img id='closeImage'>");

    $overlay.append($close);

    var navbar = $('nav');
    
    $(".projects-section a").click(function(event){
    event.preventDefault();

    var imageSource=$(this).attr("href");
        
    $image.attr("src",imageSource);
        

    $close.attr("src","assets/images/other_pictures/close.png");

        
    navbar.hide();
        
    $overlay.fadeIn(300).show();
    });
    
    $close.click(function(event){
    
    $($overlay).hide();
        
    navbar.show();
    });
    
    
    $($overlay).click(function(){
      
      $(this).hide();
        
       navbar.show();
    });
    
    
        /* Image Pop up End
    * ------------------------------------------------------ */

    
    
    

    
});







