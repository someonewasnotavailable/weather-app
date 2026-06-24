'use script';

console.log('type shi');

const btnA = document.getElementById('starA');
const btnB = document.getElementById('starB');
const btnC = document.getElementById('starC');
const btnD = document.getElementById('starD');
const btnE = document.getElementById('starE');

function btn1(e) {
    console.log(e);
    btn1tc = e.target.textContent;
    console.log(btn1tc)
    console.log(btnA); 

    if (btn1tc == 1) {
    btnA.style.backgroundColor = "white";
    btnA.style.color = "black";
    btnB.style.backgroundColor = "rgb(38,47,56)";
    btnB.style.color = "white";
    btnC.style.backgroundColor = "rgb(38,47,56)";
    btnC.style.color = "white";
    btnD.style.backgroundColor = "rgb(38,47,56)";
    btnD.style.color = "white";
    btnE.style.backgroundColor = "rgb(38,47,56)";
    btnE.style.color = "white";
    }
    else if (btn1tc == 2){
    btnA.style.backgroundColor = "rgb(38,47,56)";
    btnA.style.color = "white";
    btnB.style.backgroundColor = "white";
    btnB.style.color = "black";
    btnC.style.backgroundColor = "rgb(38,47,56)";
    btnC.style.color = "white";
    btnD.style.backgroundColor = "rgb(38,47,56)";
    btnD.style.color = "white";
    btnE.style.backgroundColor = "rgb(38,47,56)";
    btnE.style.color = "white";
    }
    else if (btn1tc == 3) {
    btnA.style.backgroundColor = "rgb(38,47,56)";
    btnA.style.color = "white";
    btnB.style.backgroundColor = "rgb(38,47,56)";
    btnB.style.color = "white";
    btnC.style.backgroundColor = "white";
    btnC.style.color = "black";
    btnD.style.backgroundColor = "rgb(38,47,56)";
    btnD.style.color = "white";
    btnE.style.backgroundColor = "rgb(38,47,56)";
    btnE.style.color = "white";
    }
    else if (btn1tc == 4) {
    btnA.style.backgroundColor = "rgb(38,47,56)";
    btnA.style.color = "white";
    btnB.style.backgroundColor = "rgb(38,47,56)";
    btnB.style.color = "white";
    btnC.style.backgroundColor = "rgb(38,47,56)";
    btnC.style.color = "white";
    btnD.style.backgroundColor = "white";
    btnD.style.color = "black";
    btnE.style.backgroundColor = "rgb(38,47,56)";
    btnE.style.color = "white";
    }
    else if (btn1tc == 5) {
    btnA.style.backgroundColor = "rgb(38,47,56)";
    btnA.style.color = "white";
    btnB.style.backgroundColor = "rgb(38,47,56)";
    btnB.style.color = "white";
    btnC.style.backgroundColor = "rgb(38,47,56)";
    btnC.style.color = "white";
    btnD.style.backgroundColor = "rgb(38,47,56)";
    btnD.style.color = "white";
    btnE.style.backgroundColor = "white";
    btnE.style.color = "black";
    }
}

// function btn1() {
// btnA.style.backgroundColor = "white";
//     btnA.style.color = "black";
//     btnB.style.backgroundColor = "rgb(28,47,56)";
//     btnB.style.color = "white";
//     btnC.style.backgroundColor = "rgb(28,47,56)";
//     btnC.style.color = "white";
//     btnD.style.backgroundColor = "rgb(28,47,56)";
//     btnD.style.color = "white";
//     btnE.style.backgroundColor = "rgb(28,47,56)";
//     btnE.style.color = "white";    
// }

// function btn2() {
//     btnA.style.backgroundColor = "rgb(28,47,56)";
//     btnA.style.color = "white";
//     btnB.style.backgroundColor = "white";
//     btnB.style.color = "black";
//     btnC.style.backgroundColor = "rgb(28,47,56)";
//     btnC.style.color = "white";
//     btnD.style.backgroundColor = "rgb(28,47,56)";
//     btnD.style.color = "white";
//     btnE.style.backgroundColor = "rgb(28,47,56)";
//     btnE.style.color = "white";
// }

// function btn3() {
//     btnA.style.backgroundColor = "rgb(28,47,56)";
//     btnA.style.color = "white";
//     btnB.style.backgroundColor = "rgb(28,47,56)";
//     btnB.style.color = "white";
//     btnC.style.backgroundColor = "white";
//     btnC.style.color = "black";
//     btnD.style.backgroundColor = "rgb(28,47,56)"
//     btnD.style.color = "white";
//     btnE.style.backgroundColor = "rgb(28,47,56)";
//     btnE.style.color = "white";

// }

// function btn4() {
//     btnA.style.backgroundColor = "rgb(28,47,56)";
//     btnA.style.color = "white";
//     btnB.style.backgroundColor = "rgb(28,47,56)";
//     btnB.style.color = "white";
//     btnC.style.backgroundColor = "rgb(28,47,56)";
//     btnC.style.color = "white";
//     btnD.style.backgroundColor = "white";
//     btnD.style.color = "black";
//     btnE.style.backgroundColor = "rgb(28,47,56)";
//     btnE.style.color = "white";
// }

// function btn5() {
//     btnA.style.backgroundColor = "rgb(28,47,56)";
//     btnA.style.color = "white";
//     btnB.style.backgroundColor = "rgb(28,47,56)";
//     btnB.style.color = "white";
//     btnC.style.backgroundColor = "rgb(28,47,56)";
//     btnC.style.color = "white";
//     btnD.style.backgroundColor = "rgb(28,47,56)";
//     btnD.style.color = "white";
//     btnE.style.backgroundColor = "white";
//     btnE.style.color = "black";
// }

btnA.addEventListener('click', btn1);
btnB.addEventListener('click', btn1);
btnC.addEventListener('click', btn1);
btnD.addEventListener('click', btn1);
btnE.addEventListener('click', btn1);

const submit = document.getElementById('submit');
const ratingbox = document.getElementById('ratingbox');
const thanksbox = document.getElementById('thanksbox');
const review = document.getElementById('review');

function Submit(){
    if (btnA.style.backgroundColor == "white") {
    ratingbox.style.display = "none";
    thanksbox.style.display = "flex";
    review.textContent = "You selected 1 out of 5";
    }
    else if (btnB.style.backgroundColor == "white") {
    ratingbox.style.display = "none";
    thanksbox.style.display = "flex";
    review.textContent = "You selected 2 out of 5";
    }
    else if (btnC.style.backgroundColor == "white") {
    ratingbox.style.display = "none";
    thanksbox.style.display = "flex";
    review.textContent = "You selected 3 out of 5";
    }
    else if (btnD.style.backgroundColor == "white") {
    ratingbox.style.display = "none";
    thanksbox.style.display = "flex";
    review.textContent = "You selected 4 out of 5";
    }
    else if (btnE.style.backgroundColor == "white") {
    ratingbox.style.display = "none";
    thanksbox.style.display = "flex";
    review.textContent = "You selected 5 out of 5";
    }

}   

submit.addEventListener('click', Submit);

