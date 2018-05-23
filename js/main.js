const $scoreboard = $('#scoreboard');
const $ball = $('#ball');
const $start = $('#start');
const $doc = $(document);
const $paddle1 = $('#paddle1');
const $paddle2 = $('#paddle2');
const $paddle = $('.paddle');
const $ballPos = $ball.css('top');

const moveUpLeft = {left: '-=2', top:'-=1'};  
const moveDownLeft = {left: '-=2', top:'+=1'};
const moveUpRight = {left: '+=2', top:'-=1'};  
const moveDownRight = {left: '+=2', top:'+=1'}; 

var player1Points = 0;
var player2Points = 0;

/////make paddles move and stop in boundaries

$doc.keydown(function(e){
    let $pos1 = $paddle1.css('top');
    let $pos2 = $paddle2.css('top'); 
    const upperBoundLimit = 50;
    const lowerBoundLimit = 450;

    switch (e.which) { 
    case 222:    // ' key
        if (parseInt($pos2) >= upperBoundLimit) {
            $paddle2.finish().animate({ top: '-=50'});}
         else {
            console.log('At limit!')
        }
    break;     

    case 191:    // ? key
        if (parseInt($pos2) <= lowerBoundLimit) {
        $paddle2.finish().animate({top: '+=50'});}
        else {
            console.log('At limit!')
        }
    break;

    case 65:    //a key
         if (parseInt($pos1) >= upperBoundLimit) {
        $paddle1.finish().animate({top: '-=50'});}
        else {
            console.log('At limit!')
        }
    break;  

    case 90:    //z key
    if (parseInt($pos1) <= lowerBoundLimit) {
        $paddle1.finish().animate({top: '+=50'});}
        else {
            console.log('At limit!')
        }
    break;
    }
})

///////////make ball move

$start.on("click", $startGame)

function $startGame() {
    function $moveBall()  { 
        // const upperBoundLimit = 0;
        // const lowerBoundLimit = 530;

        $ball.finish().animate(moveUpLeft);
    }
    setInterval($moveBall, 1);////what is causing ball to bounce rapidly
    $paddle.css("top","250px");
    function $startGame() {
        $start.on("click", $moveBall()) 
      }
    }

/////START HERE 
/////works is comment below code out

function changeDirections() {
(parseInt($ballPos)) >= upperBoundLimit;
console.log("hit");
$ball.animate(moveDownLeft);
function changeDirections();
    }   


         
//// 1. get ball to bounce off player 1 and 2 paddles
//// 2. log a point on correct players side when ball hits left or right side of screen
//// 3. reset ball after point is scored and go in opposite direction
//// 4. declare winner after 5 points are scored
//// 5. add control to game page