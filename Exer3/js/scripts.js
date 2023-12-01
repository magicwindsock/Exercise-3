var on = false;
var i = 0;
var c = 0;
const dialogue = [];
dialogue[i++] = "Are you done??";
dialogue[i++] = "Arcane secrets?";
dialogue[i++] = "You came here for this?";
dialogue[i++] = "Oh well.";
dialogue[i++] = "Wheeeeeeeee";
dialogue[i++] = "I'll be here for eternity";
dialogue[i++] = "I'm getting a headache.";
dialogue[i++] = "Have YOU ever tried to become a god?";
dialogue[i++] = "I watched a universe collapse today.";
dialogue[i++] = "Hungry.";
dialogue[i++] = "I need sleep, man...";
dialogue[i++] = "Time is an illusion. It is to me, at least.";
dialogue[i++] = "Ugh.";
dialogue[i++] = "Whomp-whomp.";
dialogue[i++] = "I'm not even supposed to be here today.";


$("#target").on("click", function () {
    $(this).html("<img src='imgs/allen3.png' class='targetimg'>");
    $(".convo").html("<h1 class='convo' tabindex='0'>" + "Geez..." + "</h1>");
})
$("#target").on("mousemove", function () {
    $(this).html("<img src='imgs/allen2.png' class='targetimg'>");
    $(".convo").html("<h1 class='convo' tabindex='0'>" + "DUDE." + "</h1>");
})

$("#target").mouseout(function () {
    $(this).html("<img src='imgs/allen3.png' class='targetimg'>");
    $(".convo").html(dialogue[c]);
});
$("#target").on("keydown", function () {
    if (on) {
        $(this).html("<img src='imgs/allen4.png' class='targetimg'>");
        on = !on;
    } else {
        $(this).html("<img src='imgs/allen5.png' class='targetimg'>");
        on = !on;
    }
    $(".convo").html(dialogue[c]);
    if (c >= dialogue.length - 1) {
        c = 0;
    }
    c++;
});