const $scoreboard = $("#scoreboard")
const $ball = $("#ball");
const $start = $("#start")
const $doc = $(document)
const $paddle1 = $('#paddle1')
const $paddle2 = $('#paddle2')
const $paddle = $('.paddle')

var player1Points = 0;
var player2Points = 0;



$doc.keydown(function(e){
    let $pos1 = $paddle1.css("top");
    let $pos2 = $paddle2.css("top"); 
    const upperBoundLimit = 60;
    const lowerBoundLimit = 470;

    switch (e.which) { 
    case 38:    //up arrow key
        if (parseInt($pos2) >= upperBoundLimit) {
            $paddle2.finish().animate({ top: "-=50" });}
         else {
            console.log("At limit!")
        }
    break;     

    case 40:    //down arrow key
        if (parseInt($pos2) <= lowerBoundLimit) {
        $paddle2.finish().animate({top: "+=50"});}
        else {
            console.log("At limit!")
        }
    break;

    case 65:    //a key
         if (parseInt($pos1) >= upperBoundLimit) {
        $paddle1.finish().animate({top: "-=50"});}
        else {
            console.log("At limit!")
        }
    break;  

    case 90:    //z key
    if (parseInt($pos1) <= lowerBoundLimit) {
        $paddle1.finish().animate({top: "+=50"});}
        else {
            console.log("At limit!")
        }
    break;
    }
})




///////////make ball move?/////////////////////////////////

// use set interval, unless it hits wall, then do this





        

        ///////////////////

    //     float x = 400;
    //     float y = 300;

    //     float ySpeed = 5;
    //     float xSpeed = 5;

    //    function bounceBall() { 
    //        // bakckground(0);
    //         x += xSpeed;
    //         if ($ball.x > 900 || $ball.x < 0){
    //             xSpeed *= -1;
    //         }
    //         y += ySpeed;
    //         if ($ball.y > 600 || $ball.y < 0){
    //             ySpeed *= -1;
    //         }

    //         ellipse (x, y, 50, 50)
    //     }

    // Js for ball movement

// Setting parameters for movement
// var x = 0;
// var y = 0;
// var r = 10;//radius
// var dx = 13;//x distance interval
// var dy = 11;//y distance interval
// var speed = 600;//doesnt go anything when i change it

//     // movement of ball?
        // ball(x, y, r);
        //     if (x + dx > width|| x + dx < 0)
        //     dx = -dx;
        //     if (y + dy > height || y + dy < 0)
        //     dy = -dy;
        //     x += dx;
        //     y += dy;
        // }
