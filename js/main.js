const $gameboard = $('#gameboard');
const $scoreboard = $('#scoreboard');
const $ball = $('#ball');
const $start = $('#start');
const $doc = $(document);
const $paddle1 = $('#paddle1');
const $paddle2 = $('#paddle2');
const $paddle = $('.paddle');
const $player1 = $('#player1');
const $player2 = $('#player2');
let score1 = 0;
let score2 = 0;
let ballRight = -1;
let ballDown = -1;
let ballSpeed //decaring variable here so it is available globally
let blip1 = new Audio("./audio/pongblip1.wav")
let blip2 = new Audio("./audio/pongblip2.wav")


function startGame() {
    ballSpeed = setInterval(moveBall, 2);//runs moveball function, sets interval at 2 millisecond
    $paddle.css("top","250px"); //sets paddles to middle of screen when game starts
};

$start.on("click", startGame);//activates start button

$doc.keydown(function(e){
    let $pos1 = $paddle1.css('top');
    let $pos2 = $paddle2.css('top'); 
    const upperBoundLimit = 50;// variable to set upper limit of gameboard
    const lowerBoundLimit = 450;// variable to set lower limit of gameboard

    switch (e.which) { 
    case 222:    // ' key
        if (parseInt($pos2) >= upperBoundLimit) {//stops paddle2 at bottom
            $paddle2.finish().animate({ top: '-=50'});}//moves paddle 2 up at increment of 50px
    break;     

    case 191:    // ? key
        if (parseInt($pos2) <= lowerBoundLimit) { //stops paddle2 at top
        $paddle2.finish().animate({top: '+=50'});}//moves paddle 2 down at increment of 50px
    break;

    case 65:    //a key
         if (parseInt($pos1) >= upperBoundLimit) {//stops paddle 1 at top
        $paddle1.finish().animate({top: '-=50'});}//moves paddle 1 up at increment of 50px
    break;  

    case 90:    //z key
    if (parseInt($pos1) <= lowerBoundLimit) {//stops paddle 1 at bottom
        $paddle1.finish().animate({top: '+=50'});}//moves paddle 1 down at increment of 50px
    break;
    }
});

///////////make ball move and bounce
function moveBall()  {

    $ball.css({left: `+=${2 * ballRight}`, top:`+=${1 * ballDown}`});

    // top wall
    if($ball.offset().top <= $gameboard.offset().top) { //if ball hits top wall
        blip1.play()//play sound
        ballDown = 1;//change directions down
    }
    //left wall
    if ($ball.offset().left <= $paddle1.offset().left + $paddle1.width() //if ball hits player 1 paddle
        && $ball.offset().top + $ball.width()/2 <= $paddle1.offset().top + $paddle1.height()
        && $ball.offset().top + $ball.width()/2 >= $paddle1.offset().top ){
        blip2.play()//play sound
        ballRight = 1;//change directions right
    }
    // bottom wall
    if($ball.offset().top + $ball.width() >= $gameboard.offset().top + $gameboard.height()) { //if ball hits bottom wall paddle
        blip1.play()//play sound
        ballDown = -1;//change directions up
    }
    // right wall
    if ($ball.offset().left + $ball.width() >= $paddle2.offset().left //if ball hits player 2 paddle
        && $ball.offset().top + $ball.width()/2 <= $paddle2.offset().top + $paddle2.height()
        && $ball.offset().top + $ball.width()/2 >= $paddle2.offset().top){
        blip2.play()//play sound
        ballRight = -1;//change directions left
    }

    if ($ball.offset().left + $ball.width() <= $gameboard.offset().left) { //if ball goes off left side of gameboard
        addPoint2() //add point for player 2
        serveBall() //run funtion serveball
       
    }
    if($ball.offset().left >= $gameboard.offset().left + $gameboard.width() ){ //if ball goes off right side of gameboard
        addPoint1() //add point for player 1
        serveBall() //run funtion serveball

    }
};

function serveBall () {
    var randomTop = Math.round(Math.random() * $gameboard.height() - $ball.height())
    $ball.css({left: 442, top: randomTop}) //serve ball from random y height on gameboard
};

function addPoint1() {
    score1++ //add one point to player 1 score
    $player1.text(score1) //change text to refelct new score
    didPlayer1Win();// run fucntion to check if there is a winner
    
};
function didPlayer1Win () {
    if (score1 >= 5) { 
        clearInterval(ballSpeed)//stop moving ball
        alert("Player 1 Wins!")
        resetGame()}
};
function addPoint2() { 
    score2++ //add one point to player 2 score
    $player2.text(score2) //change text to reflect new score
    didPlayer2Win();// fun funtion to check if there is a winner
};
function didPlayer2Win () {
    if (score2 >= 5) {
        clearInterval(ballSpeed)//stop moving ball
        alert("Player 2 Wins!")
        resetGame()}
    };

function resetGame () {   
    $paddle.css("top","250px"); //return paddles to middle
    $player1.text(0)//reset player 1 score text to 0
    $player2.text(0)// reset player 2 score text to 0
    score1 = 0//reset score to 0
    score2 = 0// reset score to 0
};



    