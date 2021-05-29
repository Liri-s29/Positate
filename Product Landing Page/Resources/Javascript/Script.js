$(document).ready(function() {
     
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) 
    {
        
        if (direction == "down") 
        {
            $('nav').addClass('sticky');
        } 
        
        else 
        {
            $('nav').removeClass('sticky');
        }
        
     }, 
    {
      offset: '60px;'
    });
    
    
    
    
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) 
    {
        $('.js--wp-1').addClass('animated fadeIn');
    }, 
    {
        offset: '50%'
    });
    
    
    
  
});