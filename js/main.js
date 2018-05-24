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
let score1 = 1
let score2 = 1
let ballRight = -1
let ballDown = -1

function addPoint1() {
    score1 = score1++
    $player1.text(score1)
    score1++;
    didPlayer1Win();
}
function didPlayer1Win () {
    if (score1 >= 6) {
        alert("Player 1 Wins!")};
        // resetGame()
}
function addPoint2() { 
    score2= score2++
    $player2.text(score2)
    score2++;
    didPlayer2Win();
}
function didPlayer2Win () {
    if (score2 >= 6) {
        alert("Player 2 Wins!")};
        // resetGame()
 }

// function resetGame () {
//     $ball.css({left: 442, top: 300});
//     $paddle.css("top","250px");  
//     clearInterval(ballMove),//stop moving 
//     disableBallMove()
//     // $player1.text(0)
//     // $player2.text(0)
// }

// function disableBallMove() {
//     $start.off("click", startGame)
// }

$doc.keydown(function(e){
    let $pos1 = $paddle1.css('top');
    let $pos2 = $paddle2.css('top'); 
    const upperBoundLimit = 50;
    const lowerBoundLimit = 450;

    switch (e.which) { 
    case 222:    // ' key
        if (parseInt($pos2) >= upperBoundLimit) {
            $paddle2.finish().animate({ top: '-=50'});}
    break;     

    case 191:    // ? key
        if (parseInt($pos2) <= lowerBoundLimit) {
        $paddle2.finish().animate({top: '+=50'});}
    break;

    case 65:    //a key
         if (parseInt($pos1) >= upperBoundLimit) {
        $paddle1.finish().animate({top: '-=50'});}
    break;  

    case 90:    //z key
    if (parseInt($pos1) <= lowerBoundLimit) {
        $paddle1.finish().animate({top: '+=50'});}
    break;
    }
})

///////////make ball move and bounce
function moveBall()  {

    $ball.css({left: `+=${2 * ballRight}`, top:`+=${1 * ballDown}`});

    // top wall
    if($ball.offset().top <= $gameboard.offset().top) {
        ballDown = 1;
    }
    //left wall
    if ($ball.offset().left <= $paddle1.offset().left + $paddle1.width()
        && $ball.offset().top + $ball.width()/2 <= $paddle1.offset().top + $paddle1.height()
        && $ball.offset().top + $ball.width()/2 >= $paddle1.offset().top ){
        ballRight = 1;
    }
    // bottom wall
    if($ball.offset().top + $ball.width() >= $gameboard.offset().top + $gameboard.height()) {
        ballDown = -1;
    }
    // right wall
    if ($ball.offset().left + $ball.width() >= $paddle2.offset().left
        && $ball.offset().top + $ball.width()/2 <= $paddle2.offset().top + $paddle2.height()
        && $ball.offset().top + $ball.width()/2 >= $paddle2.offset().top){
        ballRight = -1;
    }

    if ($ball.offset().left + $ball.width() <= $gameboard.offset().left) {
        addPoint2()
        ballRight = -1
        serveBall()
    }
    if($ball.offset().left >= $gameboard.offset().left + $gameboard.width() ){
        addPoint1()
        ballRight = 1
        serveBall()
    }
}

function serveBall () {
    var randomTop = Math.round(Math.random() * $gameboard.height() - $ball.height())
    $ball.css({left: 442, top: randomTop})
}
    
function startGame() {
    setInterval(moveBall, 1); ////the interval is what was causing ball to bounce rapidly
    $paddle.css("top","250px"); 
    }

    $start.on("click", startGame)
    //.off

//// 5. add controls to game page