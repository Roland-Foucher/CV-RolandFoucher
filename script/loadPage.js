$(document).ready(() =>
    setTimeout(function(){$("#fullpage").addClass("load")}, 2000)
    
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


