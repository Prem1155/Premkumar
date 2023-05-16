//selecting elements
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);
const btnCloseModel = document.querySelector('.close-modal');
const Modal = document.querySelector('.modal');
const Overlay = document.querySelector('.overlay');

//create a function for openbutton
const openmodel = function () {
    Modal.classList.remove('hidden');
    Overlay.classList.remove('hidden');
}

//create a function for closebutton
const closemodel = function () {
    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
}

//clicking button
for (i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openmodel);
}

//close the button
btnCloseModel.addEventListener('click', closemodel);
Overlay.addEventListener('click', closemodel);
