var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
pickedCol = ColorPicker();
colorDisplay = document.querySelector("#colorDisp");
colorDisplay.innerText = pickedCol.toUpperCase();
var main = document.querySelector('.main');
var msg = document.getElementById('message');
var head1 = document.querySelector('h1');
var head2 = document.querySelector('h2');
var message = document.querySelectorAll('.msg');
var reset = document.querySelector('#reset')
var easy = document.querySelector('#easyBtn');
var hardy = document.querySelector('#hardBtn');
var numSquare = 6;



//functions

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //logic
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return the array
    return arr;
}
function randomColor() {
    //red color
    var r = Math.floor(Math.random() * 256);
    //green color
    var g = Math.floor(Math.random() * 256);
    //blue color
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function ColorPicker() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function colorChange(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;

    }
}


/**************************************************** */
for (var i = 0; i < squares.length; i++) {
    //changing color
    squares[i].style.background = colors[i];
    //event listeners
    squares[i].addEventListener('click', function () {
        var clickedColor = this.style.background;
        if (clickedColor === pickedCol) {
            msg.innerText = "Correct";
            colorChange(clickedColor);
            main.style.background = clickedColor;
            reset.innerText = "Play Again?"



        }
        else {
            this.style.background = "transparent";
            msg.innerText = "Try Again :(";


        }
    });
}
reset.addEventListener('click', function () {
    colors = generateRandomColors(numSquare);
    this.innerText=" New Color";
    pickedCol = ColorPicker();
    colorDisplay.innerText = pickedCol.toUpperCase();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        main.style.background = "#777777";
        msg.innerText = "";
    }
});
easy.addEventListener('click', function () {
    easy.classList.add('selected');
    msg.innerText = "";
    hardy.classList.remove('selected');
    numSquare = 3;
    colors = generateRandomColors(numSquare);
    pickedCol = ColorPicker();
    colorDisplay.innerText = pickedCol.toUpperCase();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }

});
hardy.addEventListener('click', function () {
    hardy.classList.add('selected');
    msg.innerText = "";
    easy.classList.remove('selected');
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedCol = ColorPicker();
    colorDisplay.innerText = pickedCol.toUpperCase();
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});