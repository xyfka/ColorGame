// alert("CONNECTED");
// Color List Array
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons evet listeners
    setupModeButtons();
    setupSquareListeners();
    reset();
}

function setupSquareListeners() {
    for(var i = 0; i < squares.length; i++){
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to pickerColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
    
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
     
        });
    }

}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i ++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = null;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }       
    }
}

resetButton.addEventListener("click", function(){
reset()
});
 
function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());

    }
    return arr;
}

function randomColor() {
    //pick a "red" for 0 - 255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" for 0 - 255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" for 0 - 255
    var blue = Math.floor(Math.random() * 256);
   return "rgb(" + red + ", " + green + ", " + blue + ")";
}