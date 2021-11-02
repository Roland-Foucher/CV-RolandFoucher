$(document).ready(() =>
    $("#fullpage").addClass("load")
)
const $closeButton = $(".close_aside")
const $openButton = $(".open_aside")

$closeButton.click(
    () => {
        $openButton.css({"opacity" : 1});
        $('aside').css({'display' : 'none'});
    }
)

$openButton.click(
    () => {
        $openButton.css({"opacity" : 0});
        $('aside').css({'display' : 'flex'});
    }
)


