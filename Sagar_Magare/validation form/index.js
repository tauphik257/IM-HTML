// hide login page

$('.login').hide();
$('.register').addClass('active');



// click function for login

$('.login').click(function () {
    $(this).addClass('active');
    $('.register').removeClass('active');
    $('.login').show();
    $('.register').hide();
});

// click function for register

$('.register').click(function () {
    $(this).addClass('active');
    $('.login').removeClass('active');
    $('.login').hide();
    $('.register').show();
});



// hide error messege
// $(function () {

$('.w-name').hide();
$('.w-email').hide();
$('.w-pass').hide();
$('.w-repass').hide();
$('.l-email').hide();

// variables for error messege


var w_name = false;
var w_email = false;
var w_pass = false;
var w_repass = false;
var l_email = false;
// var l_pass = false;



// function for focus event

// $('.reg_input_name').focusout(function () {
//     check_name();
// });

// $('.reg_input_email').focusout(function () {
//     check_email();
// });

// $('.reg_input_pass').focusout(function () {
//     check_pass();
// });

// $('.reg_input_repass').focusout(function () {
//     check_repass();
// });

// $('.log_input_email').focusout(function () {
//     check_log_email();
// });


// validation for form

function check_name() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $('.reg_input_name').val();
    if (pattern.test(fname) && fname !== '') {
        $('.w-name').hide();
    } else {
        $('.w-name').html('should contain only characters');
        $('.w-name').show();
        $(".w-name").css("color", "red");
        w_name = true;
    }
}

function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var femail = $('.reg_input_email').val();
    if (pattern.test(femail) && email !== '') {
        $('.w-email').hide();
    } else {
        $('.w-email').html('Invalid Email');
        $('.w-email').show();
        $(".w-email").css("color", "red");
        w_email = true;
    }
}


function check_pass() {
    var password_length = $('.reg_input_pass').val().length;
    if (password_length < 6) {
        $('.w-pass').html('must be Atleast 6 Characters');
        $('.w-pass').show();
        $('.w-pass').css("color", "red");
        w_pass = true;
    } else {
        $('.w-pass').hide();

    }
}


function check_repass() {
    var password = $('.reg_input_pass').val();
    var re_pass = $('.reg_input_repass').val();
    if (password !== re_pass) {
        $('.w-repass').html('password did not match');
        $('.w-repass').show();
        $('.w-repass').css("color", "red");
        w_repass = true;
    } else {
        $('.w-repass').hide();

    }
}

function check_log_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var l_email = $('.log_input_email').val();
    if (pattern.test(l_email) && email !== '') {
        $('.l-email').hide();
    } else {
        $('.l-email').html('Invalid Email');
        $('.l-email').show();
        $(".l-email").css("color", "red");
        l_email = true;
    }
}



// store registration data in localStorage

function addData() {
    var fname = $('.reg_input_name').val();
    var femail = $('.reg_input_email').val();
    var password = $('.reg_input_pass').val();
    var re_pass = $('.reg_input_repass').val();
    var logemail = $('.log_input_email').val();
    var logpass = $('.log_input_pass').val();


    localStorage.setItem('username', fname);
    localStorage.setItem('useremail', femail);
    localStorage.setItem('userpass', password);
    localStorage.setItem('userrepass', re_pass);
    localStorage.setItem('logemail', logemail);
    localStorage.setItem('logpass', logpass);

    if ($.trim(fname) === '' || $.trim(femail) === '' || $.trim(password) === '' || $.trim(re_pass) === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Registration successful!');

};


// get data from localStorage for login

function checkData() {
    var login_email = $('.log_input_email').val();
    var login_pass = $('.log_input_pass').val();

    var get_email = localStorage.getItem('useremail');
    var get_pass = localStorage.getItem('userpass');


    if (login_email == get_email && login_pass == get_pass) {
        alert('login successfull');
        // window.location.replace('landing_page.html');
    } else {
        alert('invalid details');
    }

};

localStorage.removeItem('logemail');
localStorage.removeItem('logass');


