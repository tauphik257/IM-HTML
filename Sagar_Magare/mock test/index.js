// hide questions

$('.que-2').hide();
$('.que-3').hide();
$('.que-4').hide();
$('.que-5').hide();
$('.que-6').hide();
$('.que-7').hide();
$('.que-8').hide();
$('.que-9').hide();
$('.que-10').hide();


// current - attend - notAttend question

$(document).on('click', '.question-numbers button', function(){
    if($(this).hasClass('cur')){
        $(this).siblings().removeClass("cur");
    }else{
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
    }
});

//show question


$(document).on('click', '.btn-1', function () {
    $('.que-1').show().siblings().hide();
});

$(document).on('click', '.btn-2', function () {
    $('.que-2').show().siblings().hide();
});

$(document).on('click', '.btn-3', function () {
    $('.que-3').show().siblings().hide();
});

$(document).on('click', '.btn-4', function () {
    $('.que-4').show().siblings().hide();
});

$(document).on('click', '.btn-5', function () {
    $('.que-5').show().siblings().hide();
});

$(document).on('click', '.btn-6', function () {
    $('.que-6').show().siblings().hide();
});

$(document).on('click', '.btn-7', function () {
    $('.que-7').show().siblings().hide();
});

$(document).on('click', '.btn-8', function () {
    $('.que-8').show().siblings().hide();
});

$(document).on('click', '.btn-9', function () {
    $('.que-9').show().siblings().hide();
});

$(document).on('click', '.btn-10', function () {
    $('.que-10').show().siblings().hide();
});


// pre next button
var currentque = 0;

$(document).on('click', '.next', function () {
    if (currentque == $('.que').length - 1) {
        currentque = 0;
    }
    else {
        currentque++;
    }
    $('.que').hide();
    $('.que').eq(currentque).show();

        $('.cur').next().addClass('cur');
        $('.cur').prev().removeClass('cur');
    

})

$(document).on('click', '.prev', function () {
    if (currentque == 0) {
        currentque = $('.que').length - 1;
    }
    else {
        currentque--;
    }
    $('.que').hide();
    $('.que').eq(currentque).show();

    $('.cur').prev().addClass('cur');
    $('.cur').next().removeClass('cur');
});


// alert for score

$(document).on('click', '.submit', function () {
    var totalAttempted = 0;
    var totalCorrect = 0;
    var totalWrong = 0;


    $('.question-box li').each(function () {
        var options = $(this).find('input[type="radio"]');
        var isAttempted = false;
        options.each(function () {
            if ($(this).prop('checked')) {
                isAttempted = true;
                if ($(this).next().hasClass('correct')) {
                    totalCorrect++;
                } else {
                    totalWrong++;
                }
            }
        });
        if (isAttempted) {
            totalAttempted++;
        }
    });
    var score = totalCorrect * 2;

    Swal.fire({
        title: 'Are you sure?',
        text: "You want to submit the test!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
            swal('Total Attempt Question :' + totalAttempted + '\nCorrect Questions :' + totalCorrect + '\nWrong Answers :' + totalWrong + '\nYour Score is :' + score)
        }
      })
});



// test timer

// var timer;
// var totalTime = 200; // Total time in seconds (3 minutes and 20 seconds)

// function startTimer() {
//     // Convert totalTime to minutes and seconds
//     var minutes = Math.floor(totalTime / 60);
//     var seconds = totalTime % 60;

//     // Update the timer element's text
//     $('.time h2').text(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

//     if (totalTime <= 0) {
//         // Timer has ended
//         clearInterval(timer);
//         // alert("Time's up!");
//         Swal.fire({icon: 'error',title: 'Oops...',text: 'Times Ups!',})


//         return;
//     }

//     // Decrease totalTime by 1 second
//     totalTime--;
// }

// // Start the timer when the page loads
// timer = setInterval(startTimer, 1000);