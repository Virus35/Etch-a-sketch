function getGridSize(){
    let size = prompt('Enter the grid edge length(1-70), cancelling will create default 16x16 grid.');
    removeGrid();
    if(size >= 1 && size <= 70){
        return size;
    }
    else{
        return 16;
    }
}
function createGrid(n){
    cont.setAttribute('style',`display:grid; width: 700px; height: 700px; grid-template-columns: repeat(${n}, 1fr); grid-auto-rows: auto ;`);
    document.getElementById('borderCheck').checked = false;
    document.getElementById('noFill').checked = true;
    for(let i = 0; i < n*n; i++){
        const newDiv = document.createElement('div');
        newDiv.style.border = '1px solid #555';
        newDiv.classList.add('block');
        cont.appendChild(newDiv);
    }
}
function removeGrid(){
    const divElem = document.querySelectorAll('#container > .block');
    divElem.forEach((ele) => {
        cont.removeChild(ele);
    });
}
function clearGrid(){
    const divElem = document.querySelectorAll('#container > .block');
    if(document.getElementById('grayscale').checked){
        divElem.forEach((ele) => {
            ele.style.backgroundColor = '#000';
            ele.style.opacity = 0;
        });
    }
    else {
        divElem.forEach((ele) => {
            ele.style.backgroundColor = '#FFF';
            ele.style.opacity = 1;
        });
    }
}
function toggleBorder(){
    const divElem = document.querySelectorAll('#container > .block');
    if(document.getElementById('borderCheck').checked){
        divElem.forEach((ele) => {
            ele.style.border = '';
        });
    }
    else{
        divElem.forEach((ele) => {
            ele.style.border = '1px solid #555';
        });
    }
}
function randomRGBValue(){
    return Math.floor(Math.random()*256);
}
function randomFill(){
    const divElem = document.querySelectorAll('#container > .block');
    if(document.getElementById('grayscale').checked){
        divElem.forEach((ele) => {
            ele.style.backgroundColor = 'rgb(0, 0, 0)';
            ele.style.opacity = Math.random();
        });
    }
    else{
        divElem.forEach((ele) => {
            ele.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
        });
    }
}
function fillColour(e){
    colourValue.parentElement.style.display = 'none';
    if(document.getElementById('pickFill').checked){
        colourValue.parentElement.style.display = 'block';
        e.target.style.backgroundColor = colourValue.value;
    }
    else if(document.getElementById('rainbowFill').checked){
        e.target.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
    }
    else if(document.getElementById('grayscale').checked){
        e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
    }
}
function fillTypeChange(){
    colourValue.parentElement.style.display = 'none';
    prevFillType.push(document.querySelector('input[type="radio"][name="fill"]:checked'));
    prevFillType.shift();
    if(!(prevFillType.includes(document.getElementById('noFill')) || (prevFillType.includes(document.getElementById('pickFill')) && prevFillType.includes(document.getElementById('rainbowFill'))))){
        clearGrid();
    }
    if(document.getElementById('pickFill').checked){
        colourValue.parentElement.style.display = 'block';
    }
}

const cont = document.getElementById('container');
const newGridBtn = document.getElementById('createNewGrid');
const clearGridBtn = document.getElementById('clearGrid');
const randomBtn = document.getElementById('randomBtn');
const fillType = document.querySelectorAll('input[type="radio"][name="fill"]');
const borderCheck = document.getElementById('borderCheck');
const colourValue = document.getElementById('colourPick');
createGrid(16);
newGridBtn.addEventListener('click', function(){
    createGrid(getGridSize());
});
let prevFillType = [false, document.querySelector('input[type="radio"][name="fill"]:checked')];
const gridElem = document.querySelectorAll('#container > .block');
clearGridBtn.addEventListener('click', clearGrid);
randomBtn.addEventListener('click', randomFill);
fillType.forEach(function(type){
    type.addEventListener('change', fillTypeChange);
});
gridElem.forEach(function(ele){
    ele.addEventListener('mouseenter', function(e){
        fillColour(e);
    });
});
borderCheck.addEventListener('change', toggleBorder);