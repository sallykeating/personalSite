var myPlayer;
var goal;
var myBarriers = [];
var mySound;
var level;
var crash = new Audio('../files/crash.wav');
var win = new Audio('../files/win.wav');

function playWin() {
  win.play();
}

function playCrash() {
  crash.play();
}
// restart function will reset the board so that the player can continiously try.
function restart(){
    window.location.reload(true);
}

// beginGame sets up the board for the player with the barriers, players and finish object.
function beginGame() {
    document.getElementById('level1').style.display = "block";
    document.getElementById('startScreen').style.display = "none";
    playBoard.start();
    myPlayer = new component(40, 40, "red", 20, 630, "color");
    goal = new component(40, 40, "green", 810, 20, "color");
    myBarriers = [];

    myBarriers.push(new component(5, 680, "black", 0, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 0, "color"));
    myBarriers.push(new component(5, 680, "black", 875, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 675, "color"));

    myBarriers.push(new component(240, 10, "black", 0, 525, "color"));
    myBarriers.push(new component(10, 460, "black", 320, 380, "color"))
    myBarriers.push(new component(220, 10, "black", 100, 380, "color"));
    myBarriers.push(new component(10, 150, "black", 410, 0, "color"))
    myBarriers.push(new component(580, 10, "black", 100, 150, "color"));
    myBarriers.push(new component(10, 400, "black", 680, 150, "color"))
    myBarriers.push(new component(10, 120, "black", 270, 590, "color"))
    myBarriers.push(new component(190, 10, "black", 500, 550, "color"));
    myBarriers.push(new component(500, 10, "black", 0, 275, "color"));
    level = 1;
}

function levelTwo() {
    document.getElementById('level2').style.display = "block";
    document.getElementById('finishScreen').style.display = "none";
    playBoard.start();
    myPlayer = new component(40, 40, "red", 10, 10, "color");
    goal = new component(40, 40, "green", 820, 620, "color");
    myBarriers = [];

    myBarriers.push(new component(5, 680, "black", 0, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 0, "color"));
    myBarriers.push(new component(5, 680, "black", 875, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 675, "color"));

    myBarriers.push(new component(10, 480, "black", 60, 0, "color"));
    myBarriers.push(new component(10, 180, "black", 60, 560, "color"));
    myBarriers.push(new component(10, 600, "black", 160, 80, "color"));
    myBarriers.push(new component(10, 600, "black", 160, 80, "color"));
    myBarriers.push(new component(10, 600, "black", 260, 0, "color"));
    myBarriers.push(new component(200, 10, "black", 680, 580, "color"));
    myBarriers.push(new component(10, 600, "black", 360, 80, "color"));
    myBarriers.push(new component(380, 10, "black", 360, 80, "color"));
    myBarriers.push(new component(380, 10, "black", 360, 480, "color"));
    myBarriers.push(new component(100, 10, "black", 640, 280, "color"));
    myBarriers.push(new component(10, 210, "black", 740, 280, "color"));
    myBarriers.push(new component(10, 320, "black", 550, 80, "color"));
    myBarriers.push(new component(240, 10, "black", 640, 180, "color"));
    myBarriers.push(new component(10, 120, "black", 520, 480, "color"));
    level = 2;
}


function levelThree() {
    document.getElementById('level3').style.display = "block";
    document.getElementById('finishScreenTwo').style.display = "none";
    playBoard.start();
    myPlayer = new component(40, 40, "red", 10, 10, "color");
    goal = new component(40, 40, "green", 300, 350, "color");
    myBarriers = [];

    myBarriers.push(new component(5, 680, "black", 0, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 0, "color"));
    myBarriers.push(new component(5, 680, "black", 875, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 675, "color"));

    myBarriers.push(new component(780, 10, "black", 0, 55, "color"));
    myBarriers.push(new component(10, 560, "black", 780, 55, "color"));
    myBarriers.push(new component(710, 10, "black", 80, 605, "color"));
    myBarriers.push(new component(10, 470, "black", 75, 145, "color"));
    myBarriers.push(new component(620, 10, "black", 80, 145, "color"));
    myBarriers.push(new component(10, 380, "black", 700, 145, "color"));
    myBarriers.push(new component(530, 10, "black", 180, 525, "color"));
    myBarriers.push(new component(10, 300, "black", 180, 225, "color"))
    myBarriers.push(new component(430, 10, "black", 180, 225, "color"));
    myBarriers.push(new component(10, 220, "black", 610, 225, "color"))
    myBarriers.push(new component(350, 10, "black", 270, 435, "color"));
    myBarriers.push(new component(10, 140, "black", 270, 305, "color"))
    myBarriers.push(new component(270, 10, "black", 270, 305, "color"));
    myBarriers.push(new component(10, 60, "black", 530, 305, "color"));
    level = 3;
}

function levelFour() {
    document.getElementById('level4').style.display = "block";
    document.getElementById('finishScreenThree').style.display = "none";
    playBoard.start();
    myPlayer = new component(40, 40, "red", 440, 50, "color");
    goal = new component(40, 40, "green", 240, 240, "color");
    myBarriers = [];

    myBarriers.push(new component(5, 680, "black", 0, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 0, "color"));
    myBarriers.push(new component(5, 680, "black", 875, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 675, "color"));

    myBarriers.push(new component(350, 10, "black", 0, 55, "color"));
    myBarriers.push(new component(350, 10, "black", 550, 55, "color"));
    myBarriers.push(new component(660, 10, "black", 220, 150, "color"));
    myBarriers.push(new component(10, 440, "black", 220, 150, "color"));
    myBarriers.push(new component(440, 10, "black", 220, 590, "color"));
    myBarriers.push(new component(10, 440, "black", 760, 150, "color"));
    myBarriers.push(new component(500, 10, "black", 70, 225, "color"));
    myBarriers.push(new component(150, 10, "black", 0, 350, "color"));
    myBarriers.push(new component(150, 10, "black", 70, 450, "color"));
    myBarriers.push(new component(150, 10, "black", 0, 550, "color"));
    myBarriers.push(new component(10, 280, "black", 570, 225, "color"));
    myBarriers.push(new component(10, 180, "black", 400, 420, "color"));
    myBarriers.push(new component(10, 180, "black", 660, 420, "color"));
    myBarriers.push(new component(10, 280, "black", 300, 225, "color"));
    myBarriers.push(new component(10, 280, "black", 480, 225, "color"));
    level = 4;
}

function levelFive() {
    document.getElementById('level5').style.display = "block";
    document.getElementById('finishScreenFour').style.display = "none";
    playBoard.start();
    myPlayer = new component(40, 40, "red", 300, 350, "color");
    goal = new component(40, 40, "green", 10, 10, "color");
    myBarriers = [];

    myBarriers.push(new component(5, 680, "black", 0, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 0, "color"));
    myBarriers.push(new component(5, 680, "black", 875, 0, "color"));
    myBarriers.push(new component(880, 5, "black", 0, 675, "color"));

    myBarriers.push(new component(780, 10, "black", 0, 55, "color"));
    myBarriers.push(new component(10, 560, "black", 780, 55, "color"));
    myBarriers.push(new component(710, 10, "black", 80, 605, "color"));
    myBarriers.push(new component(10, 470, "black", 75, 145, "color"));
    myBarriers.push(new component(620, 10, "black", 80, 145, "color"));
    myBarriers.push(new component(10, 380, "black", 700, 145, "color"));
    myBarriers.push(new component(530, 10, "black", 180, 525, "color"));
    myBarriers.push(new component(10, 300, "black", 180, 225, "color"))
    myBarriers.push(new component(430, 10, "black", 180, 225, "color"));
    myBarriers.push(new component(10, 220, "black", 610, 225, "color"))
    myBarriers.push(new component(350, 10, "black", 270, 435, "color"));
    myBarriers.push(new component(10, 140, "black", 270, 305, "color"))
    myBarriers.push(new component(270, 10, "black", 270, 305, "color"));
    myBarriers.push(new component(10, 60, "black", 530, 305, "color"));
    level = 5;
}


// the variable playboard defines all the various attributes that are associated with the board
var playBoard = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.frameNo = 0;
        this.canvas.width = 880;
        this.canvas.height = 680;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateBoard, 20);
        window.addEventListener('keydown', function (e) {
            playBoard.keys = (playBoard.keys || []);
            playBoard.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            playBoard.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
        this.clear();
        document.getElementById('level1').style.display = "none";
        document.getElementById('level2').style.display = "none";
        document.getElementById('level3').style.display = "none";
        document.getElementById('level4').style.display = "none";
        document.getElementById('level5').style.display = "none";
        document.getElementById('lostScreen').style.display = "block";
    },
    levelOnePause: function() {
        this.clear();
        document.getElementById('level1').style.display = "none";
        document.getElementById('finishScreen').style.display = "block";
    },
    levelTwoPause: function() {
        this.clear();
        document.getElementById('level2').style.display = "none";
        document.getElementById('finishScreenTwo').style.display = "block";
    },
    levelThreePause: function() {
        this.clear();
        document.getElementById('level3').style.display = "none";
        document.getElementById('finishScreenThree').style.display = "block";
    },
    levelFourPause: function() {
        this.clear();
        document.getElementById('level4').style.display = "none";
        document.getElementById('finishScreenFour').style.display = "block";
    },
    levelFivePause: function() {
        this.clear();
        document.getElementById('level5').style.display = "none";
        document.getElementById('finishScreenFive').style.display = "block";
    }
}

// the component function creates an object for the myBarriers, myPlayer and goal objects
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = playBoard.context;
        if (type == "image") {
            ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

// updateBoard keeps the playboard up to date throughout the game play
function updateBoard() {
    var x, y;
    for (i = 0; i < myBarriers.length; i += 1) {
        if (myPlayer.crashWith(myBarriers[i])) {
            playCrash();
            playBoard.stop();
            return;
        }
    }
    playBoard.clear();
    playBoard.frameNo += 1;

    myPlayer.speedX = 0;
    myPlayer.speedY = 0;
    if (playBoard.keys && playBoard.keys[37]) {myPlayer.speedX = -1; }
    if (playBoard.keys && playBoard.keys[39]) {myPlayer.speedX = 1; }
    if (playBoard.keys && playBoard.keys[38]) {myPlayer.speedY = -1; }
    if (playBoard.keys && playBoard.keys[40]) {myPlayer.speedY = 1; }

    myPlayer.newPos();
    myPlayer.update();
    goal.update();


    for (i = 0; i < myBarriers.length; i += 1) {
        myBarriers[i].update();
    }

    if (myPlayer.crashWith(goal) && level == 1){
        playWin();
        playBoard.levelOnePause();
        return;
    }
    if (myPlayer.crashWith(goal) && level == 2){
        playWin();
        playBoard.levelTwoPause();
        return;
    }

    if (myPlayer.crashWith(goal) && level == 3){
        playWin();
        playBoard.levelThreePause();
        return;
    }

    if (myPlayer.crashWith(goal) && level == 4){
        playWin();
        playBoard.levelFourPause();
        return;
    }

    if (myPlayer.crashWith(goal) && level == 5){
        playWin();
        playBoard.levelFivePause();
        return;
    }
}

function clearmove() {
    myPlayer.speedX = 0;
    myPlayer.speedY = 0;
}

function everyinterval(n) {
  if ((playBoard.frameNo / n) % 1 == 0) {return true;}
  return false;
}
