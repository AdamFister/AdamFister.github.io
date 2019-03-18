Vue.component('date', {
    computed: {
        formatDate() {
            var today = new Date();
            var dd = today.getDate();
            var yyyy = today.getFullYear();

            var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            return currDate = (day[today.getDay()] + ' ' + month[today.getMonth()] + ' ' + dd + ', ' + yyyy);
        }
    },
    template: `<h1>{{ formatDate }}</h1>`
})

var app = new Vue({
    el: '#app'
})

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