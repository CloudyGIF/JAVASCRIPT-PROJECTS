let activePlayer = 'X'; //sets active player as X and selected squares as an empty array
let selectedSquares = [];

function placeXOrO(squareNumber) {
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X'){
            select.style.backgroundImage = 'url(images/x.png)';
        } else {
            select.style.backgroundImage = 'url(images/o.png)';
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if(activePlayer === 'X'){
            activePlayer = 'O';
        } else {
            activePlayer = 'X'
        }

        audio('media/place.wav');
        if(activePlayer ==='O'){
            disableClick();
            setTimeout(function() {computersTurn();}, 1000);
        }
    }
    return true;
}

//main function of the game. Firstly it checks that the square has not allready been used, then it gets the ID of the square and sets the image based on the active player
//var. It then stores the selected square with the active player in the selected squares array and checks for win. Then it changes the active player, plays the audio
//And lastly executes the computer turn func
function checkWinConditions(){
    if(arrayIncludes('OX', '1X', '2X')){ drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3X', '5X', '5X')){ drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6X', '7X', '8X')){ drawWinLine(50,508,558,508)}
    else if (arrayIncludes('OX', '3X', '6X')){ drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1X', '4X', '7X')){ drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2X', '5X', '8X')){ drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6X', '4X', '2X')){ drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0X', '4X', '28X')){ drawWinLine(100,100,520,520)}
    else if (arrayIncludes('0O', '1O', '2O')){ drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3O', '4O', '5O')){ drawWinLine(50,304,558,100)}
    else if (arrayIncludes('6O', '7O', '8O')){ drawWinLine(50,508,558,508)}
    else if (arrayIncludes('OO', '3O', '6O')){ drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1O', '4O', '7O')){ drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2O', '5O', '8O')){ drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6O', '4O', '2O')){ drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0O', '4O', '8O')){ drawWinLine(100,100,520,520)}
    else if(selectedSquares.length >=9){
        audio('media/tie.mp3');
        setTimeout(function () { resetGame();}, 500);
    }
  
}

//this win condition function checks for any possible combination of win coditions and if one is present, draws a line across the squares. If all squares on the board 
//are used (lengh >=9) then it executes a tie scenario and resets the game. 

function arrayIncludes(A,B,C){
    const a = selectedSquares.includes(A);
    const b = selectedSquares.includes(B);
    const c = selectedSquares.includes(C);
    if(a===true && b===true && c===true){
        return true;
    }
}

//this checks if the A B C are all present in selected squares array. 

function disableClick(){
    body.style.pointerEvents = 'none';
    setTimeout(function(){ body.style.pointerEvents = 'auto';}, 1000);
}

//this disables the players ability to click anything for 1000 miliseconds 

function audio(url){
    let audio = new Audio(url);
    audio.play();
}

//plays audio

function computersTurn(){
    let success = false;
    let pickASquare;
    while(!success){
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)){
            placeXOrO(pickASquare);
            success = true;
        }
    }
}

//palces a "O" on a random square, the func checks for the first avaliable chosen at random

function drawWinLine(cX1,cY1,cX2,cY2){
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = cX1,
        y1 = cY1,
        x2 = cX2,
        y2 = cY2,
        x = x1,
        y = y1;

    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,255,33,0.8)';
        c.stroke();

        if(x <= x2 && y1 <= y2){
            if(x < x2) {x +=10;}
            if(y <y2) {y +=10;}
            if(x >=x2 && y>= y2){cancelAnimationFrame(animationLoop);}

        }
        if(x1 <= x2 && y1 >= y2){
            if(x < x2){ x+= 10;}
            if(y > y2){y -= 10;}
            if (x >= x2 && y <= y2){cancelAnimationFrame(animationLoop);}
        }

    }

    function clear(){
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio('media/WinGame.mp3');
    animateLineDrawing();
    setTimeout(function(){ clear(); resetGame(); }, 1000);

}

//Draws the line using the canvas html component and parameters. It then disables player's input, plays win audio and clears the board/resets the game in 1000 miliseconds. 

function resetGame(){
    for (let i = 0;i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }

    selectedSquares = [];
}

//resets the game by removing the background images and making the selectedSquares array empty again