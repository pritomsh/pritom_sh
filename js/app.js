/* fixed navbar in jquery */
window.onscroll = windowScroll;
windowScroll();
function windowScroll () {
    if($(this).scrollTop() > 75) {
        $('.contact-nav, .navbar').addClass('active');
    } else {
        $('.contact-nav, .navbar').removeClass('active');
    };
}


$(document).ready(function(){
    /* navigation function */
    $('.navbar-nav a, a.brand').on('click', function () {
        var $el = $(this)
            id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 700);

        $('.navbar-collapse').collapse('hide');
        return false;
    });
});


// Set the date we're counting down to
var countDownDate = new Date("Mar 28, 2021 24:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
