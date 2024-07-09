/// <reference types="../@types/jquery" />


let accordionOffset = $(".myAccordion").offset().top


$(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > accordionOffset - 100) {
        $("#backToTop").fadeIn(1000)
    } else {
        $("#backToTop").fadeOut(1000)
    }
})


$("#backToTop").on("click", function () {
    $("body", "html").animate({ scrollTop: 0 }, 2000)
})


const leftMenuWidth = $("#leftMenu").innerWidth()
$("#openLeftMenu").on("click", function () {

    $("#leftMenu").animate({ left: "0" }, 400)
    $("header .content").animate({ marginLeft: leftMenuWidth }, 400)
    $(this).animate({ left: leftMenuWidth }, 400)
})

$("#closeBtn").on("click", function () {
    $("#leftMenu").animate({ left: -leftMenuWidth }, 400)
    $("header .content").animate({ marginLeft: "0" }, 400)
    $("#openLeftMenu").animate({ left: "0" }, 400)
})

$(".myAccordion .content h3").on("click", function () {
    $(".myAccordion .content p").not($(this).next()).slideUp(500)
    $(this).next().slideToggle(500)
})

$("#leftMenu a").on("click", function () {
    const sectionId = $(this).attr("href")
    const positionOfSection = $(sectionId).offset().top
    $("html,body").animate({ scrollTop: positionOfSection }, 2000)

})

window.onload = function () {

    countDownToTime("3 november 2024 10:00:00");
}

function countDownToTime(date) {
    let eventDate = new Date(date)
    eventDate = (eventDate.getTime() / 1000);
    let nowDate = new Date();
    nowDate = (nowDate.getTime() / 1000);
    let timeDifference = (eventDate - nowDate);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)
    setInterval(function () { countDownToTime(date); }, 1000);
}


$("textarea").keyup(function () {
    let value = $(this).val().length
    let maxLength = 100
    let result = maxLength - value
    if (result == 0 || result < 0) {
        $(".num").text("your available character finished")
    } else {
        $(".num").text(result)
    }

})