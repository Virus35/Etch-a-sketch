function createGrid(n){
    for(let i = 0; i < n*n; i++){
        cont.setAttribute('style',`display:grid; width: 650px; height: 650px; grid-template-columns: repeat(${n}, 1fr); grid-auto-rows: auto ; grid-gap: 1px`);
        const newDiv = document.createElement('div');
        newDiv.classList.add('block');
        newDiv.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = color);
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
    divElem.forEach((ele) => {
        ele.style.backgroundColor = '#FFF';
    });
}
function randomRGBValue(){
    return Math.floor(Math.random()*256);
}
function randomFill(){
    const divElem = document.querySelectorAll('#container > .block');
    divElem.forEach((ele) => {
        ele.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
    });
}

const cont = document.getElementById('container');
const newGridBtn = document.getElementById('createNewGrid');
const clearGridBtn = document.getElementById('clearGrid');
const randomBtn = document.getElementById('randomBtn');
const fillColorValue = document.getElementById('colorPicker');
let color = '#555555';
createGrid(16);
newGridBtn.addEventListener('click', function(){
    removeGrid();
    let size = prompt('Enter the grid edge length(1-64)');
    if(size >= 1 && size <= 64){
        createGrid(size);
    }
    else{
        alert('Invalid input! (default size is 16)');
        createGrid(16);
    }
});
clearGridBtn.addEventListener('click', clearGrid);
randomBtn.addEventListener('click', randomFill);
fillColorValue.addEventListener('change', function(){
    color = fillColorValue.value;
});
