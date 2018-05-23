const $gameboard = $('#gameboard');
const $scoreboard = $('#scoreboard');
var $score = 0
const $ball = $('#ball');
const $start = $('#start');
const $doc = $(document);
const $paddle1 = $('#paddle1');
const $paddle2 = $('#paddle2');
const $paddle = $('.paddle');
const $player1 = $('#player1');
const $player2 = $('#player2');

// const moveUpLeft = {left: '-=2', top:'-=1'};  
// const moveDownLeft = {left: '-=2', top:'+=1'};
// const moveUpRight = {left: '+=2', top:'-=1'};  
// const moveDownRight = {left: '+=2', top:'+=1'}; 

let ballRight = -1
let ballDown = -1


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

function moveBall()  {

    $ball.css({left: `+=${2 * ballRight}`, top:`+=${1 * ballDown}`});

    // top wall
    if(($ball.offset().top <= $gameboard.offset().top)) {
        ballDown = 1
    }
    //left wall
    if (($ball.offset().left <= $paddle1.offset().left + 15)){
        ballRight = 1
    }
    // bottom wall
    if(($ball.offset().top + 20 >= $gameboard.offset().top + 600)) {
        ballDown = -1
    }
    // right wall
    if (($ball.offset().left + 20 >= $paddle2.offset().left)){
        ballRight = -1
    }

    // paddle
}

function $startGame() {
    
    setInterval(moveBall, 1); ////the interval is what was causing ball to bounce rapidly
    $paddle.css("top","250px");
    function $startGame() {
        $start.on("click", moveBall()) 
      }
    }

/////START HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/////works if comment below code out

function changeDirections() {
    const $ballPos = $ball.css('top');
    const upperBoundLimit = 50;
    const lowerBoundLimit = 450;

    parseInt($ballPos) >= upperBoundLimit;
    console.log("hit");
    $ball.animate(moveDownLeft);a
aa
    }   
  

//// 1. get ball to bounce off player 1 and 2 paddles


//// 2. log a point on correct players side when ball hits left or right side of screen
function scorePoint() {
    const $ballPos = $ball.css('left');
    const leftBoundLimit = 0;
    const rightBoundLimit = 900;
    
    (parseInt($ballPos)) <= leftBoundLimit;
    console.log('point!');

    player2.text(score++);

    (parseInt($ballPos)) >= rightBoundLimit;
    console.log('point!');

    player1.text(score++);
}

//// 3. reset ball after point is scored and go in opposite direction
//// if else statement: 
//// if direction is left, go right
//// if direction is right, go left

// //// 4. declare winner after 5 points are scored

function declareWinner() {
    score >= 5;
    alert('winner!')
}

//// 5. add controls to game page

