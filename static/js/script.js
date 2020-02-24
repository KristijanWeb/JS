// ********************* Challenge 1 ********************
function ageInDays(){
    var birthYear = prompt('What year were you born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}

// ******************** Challenge 2 **********************
function generateSpace(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-space-gen");

    image.src = "img/space.jpg";
    div.appendChild(image);
}

// ******************** Challenge 3 ***********************
function rpsGame(yourChoice){
    //console.log(yourChoice);
    var humanChoise, botChoise;
    humanChoise = yourChoice.id;

    botChoise = numberToChoise(randToRpsInt());
    // console.log('Computer choise: ', botChoise);

    results = decideWinner(humanChoise, botChoise); // [0, 1] human lost | bot won
    // console.log(results);

    message = finalMessage(results); // {message: 'You won!', 'color': 'green'}
    // console.log(message);

    rpsFrontEnd(yourChoice.id, botChoise, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoise(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoise){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoise];
    var computerScore = rpsDatabase[computerChoise][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if(yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }
    else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoise, botImageChoise, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoise] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' />";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; padding: 30px; font-size: 60px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoise] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' />";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


// ******************** Challenge 4 ***********************
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];

for(let i = 0; i <all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

//console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
    else if(buttonThingy.value === 'blue'){
        buttonsBlue();
    }
}

// Red BackgroundColor
function buttonsRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

// Green BackgroundColor
function buttonsGreen(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

// Blue BackgroundColorr
function buttonsBlue(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

// Reset BackgroundColorr
function buttonColorReset(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}