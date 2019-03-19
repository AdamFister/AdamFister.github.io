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

Vue.component('clock', {
    template: `<h1>{{ getStandardTime }}</h1>`,
    data: function () {
        return { currentTime: new Date() }
    },
    methods: {
        displayTime: function () {
            var self = this;
            if (!this.interval) {
            this.interval = setInterval(() => {
                self.currentTime = new Date();
                self.time_str = self.getStandardTime;
                }, 1000);
            } else {
                clearInterview(this.interval);
                this.interval = 0;
            }
        }
    },
    created() {
        this.displayTime();
    },
    computed: {
        meridiem() {
            if (this.currentTime.getHours() >= 12) {
                return "PM";
            }
            else if (this.currentTime.getHours() >= 0 && this.currentTime.getHours() < 12) {
                return "AM";

            }

        },
        getStandardTime() {
            return this.standardHours + ":" + this.mins + ":" + this.sec + " " + this.meridiem
        },
        mins() {
            if (this.currentTime.getMinutes() < 10) {
                return '0' + this.currentTime.getMinutes()
            }
            else return this.currentTime.getMinutes()
        },
        sec() {
            if (this.currentTime.getSeconds() < 10) {
                return '0' + this.currentTime.getSeconds()
            }
            else return this.currentTime.getSeconds()
        },
        standardHours() {
            if (this.currentTime.getHours() > 12) {
                return this.currentTime.getHours() - 12;
            }
            else if (this.currentTime.getHours() == 0) {
                return 12;
            }
            else {
                return this.currentTime.getHours();
            }
        }
    }
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