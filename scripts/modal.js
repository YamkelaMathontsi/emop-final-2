var modal = document.getElementById('simpleModal')
var modalBtn = document.getElementById('modalBtn')

var bucketHat = document.getElementById('bucketHat')
var hatBtn = document.getElementById('hatBtn')

var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideclick)

function openModal(){
 modal.style.display = 'block';
// console.log(123)
}

function closeModal(){
    modal.style.display = 'none';   
}

function outsideclick(e){
    if(e.target == modal)
    modal.style.display = 'none';   
}

var modal2 = document.getElementById('simpleModal')
var modalBtn2 = document.getElementById('modalBtn')

var bucketHat = document.getElementById('bucketHat')
var hatBtn = document.getElementById('hatBtn')

var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideclick)

function openModal(){
 modal.style.display = 'block';
// console.log(123)
}

function closeModal(){
    modal.style.display = 'none';   
}

function outsideclick(e){
    if(e.target == modal)
    modal.style.display = 'none';   
}