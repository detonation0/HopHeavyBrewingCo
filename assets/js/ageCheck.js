var cookie = $.cookie('over21');
var $body = $('body');

console.log(cookie);

if (typeof cookie == 'undefined') {
    cookie = 'no';
}

console.log(cookie);

if (cookie != 'yes') {
    $body.addClass('is-age-menu-visible');
    disableScroll();

    for (var i = (new Date).getFullYear(); i > 1899; i--) {
        $('#yearSelect').append($('<option></option>').attr('value',i).text(i));
    }
} else {
    $body.removeClass('is-age-menu-visible');
}

$(document).ready(function() {
    $('#validateAge').click(function() {
        // get todays date
        var d = new Date();
        var month = d.getMonth() + 1;
        var year = d.getYear() + 1900;

        // set up legal age
        var legalYear = d.getYear() + 1879;
        var l = new Date();
        l.setMonth(month);
        l.setYear(legalYear);

        // get users inputted age
        var u = new Date();
        u.setMonth($('#monthSelect').val());
        u.setYear($('#yearSelect').val());

        // compare users age to legal age
        if (u <= l) {
            if ($('#rememberMe').val()) {
                $.cookie('over21', 'yes', { expires: 365, path: '/' });
            } else {
                $.cookie('over21', 'yes');
            }

            $body.removeClass('is-age-menu-visible');
            enableScroll();
        } else {
            window.location.href = 'http://www.google.com/';
        }
    });
});



// Disable Scrolling
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
}
