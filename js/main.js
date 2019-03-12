$(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();
    $('.navbar-default').addClass('top-of-page');

});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function(){
$('.navbar-nav .nav-item').click(function(){
$('.navbar-nav .nav-item').removeClass('active');
$(this).addClass('active');
})
});