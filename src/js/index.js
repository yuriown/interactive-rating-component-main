let button1 = document.getElementById('button-1');
let button2 = document.getElementById('button-2');
let button3 = document.getElementById('button-3');
let button4 = document.getElementById('button-4');
let button5 = document.getElementById('button-5');
let selectedNumber

function getButton(string){
    return document.getElementById(`button-${string}`)
}

function clearSelected(){
    elements = document.getElementsByClassName('selected');
    for(var i = 0; i < elements.length; i++){
        elements[i].classList.remove('selected');
    }
}

function clickKeyboard(number) {
    clearSelected();
    getButton(number).classList.add('selected')
    selectedNumber = number
}


function setSelected(answer){
    let idQuestion = document.querySelector('#question')
    let idThanks = document.querySelector('#thanks')
    idQuestion.classList.add('no-opacity')
    idThanks.classList.remove('no-opacity')
    document.getElementById("answer").textContent += selectedNumber;
}



