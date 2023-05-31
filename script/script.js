$(document).ready(function(){
    $('.bxslider').bxSlider({
    })
});
$(document).ready(function(){
    $('.bxslider_team').bxSlider({
    })
});
$(document).ready(function($){
$('.primary-nav-trigger').on('click', function(){
    $('menu-icon').toggleClass('is-clicked');
    $('primary-nav').toggleClass('is-visible');
    $('body').toggleClass('overflow-hidden');
});
});