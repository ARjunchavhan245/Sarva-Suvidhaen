$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $(".sticky-top").css("background", "#9dadfb");
        }

        else {
            $(".sticky-top").css("background", "");
        }
    })

    let graphics = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh'];
    let randomIndex = Math.floor(Math.random() * (6 - 0 + 1) + 0);
    console.log(randomIndex);
    $("#"+graphics[randomIndex]).removeClass("d-none");
})