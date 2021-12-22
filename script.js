let player = $('.player__video').first();
let progress = $('.progress__filled').first();

//create button pause and alternate between play and pause
$("button").click(function (event) {
    if($(this).is(".toggle")) {
        player.trigger("play");
        $(this).removeClass("toggle");
        $(this).text("⏸")
    }
    else {
        player.trigger("pause");
        $(this).text("►");
        $(this).addClass("toggle");
    }
})

//timeupdate
player.on("timeupdate",function () {
    progress.css ( {
        "width": 100 * this.currentTime/this.duration
    })
})