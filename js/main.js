// Js for ball movement

// Setting parameters for movement
var x = 0;
var y = 0;
var r = 10;//radius
var dx = 13;//x distance interval
var dy = 11;//y distance interval
var speed = 600;//doesnt go anything when i change it

//     // movement of ball?
        ball(x, y, r);
            if (x + dx > width|| x + dx < 0)
            dx = -dx;
            if (y + dy > height || y + dy < 0)
            dy = -dy;
            x += dx;
            y += dy;
        }


//movement of paddles
var $ball = $("#ball");
var $start = $("#start")


$(document).keydown(function(e){
    switch (e.which){
                
    case 38:    //up arrow key
        $("#paddle2").finish().animate({
            top: "-=50"
        });
    break;
                
    case 40:    //bottom arrow key
        $("#paddle2").finish().animate({
            top: "+=50"
        });
    break;

    case 65:    //up arrow key
        $("#paddle1").finish().animate({
            top: "-=50"
        });
    break;
                
    case 90:    //bottom arrow key
        $("#paddle1").finish().animate({
            top: "+=50"
        });
    break;
    }
        });

$(document).ready(function(){
    $start.click(function(){
        $ball.animate({left: '+=93', top: '+=87'}, 1000);
            });
        });