$(document).ready(function(){
    // Activate Carousel
    $("#testimonial-carousel").carousel({interval: 500});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#testimonial-carousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#testimonial-carousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#testimonial-carousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#testimonial-carousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#testimonial-carousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#testimonial-carousel").carousel("next");
    });
});