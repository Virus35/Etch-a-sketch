function getGridSize(){
    removeGrid();
    let size = prompt('Enter the grid edge length(1-64), cancelling will create default 16x16 grid.');
    if(size >= 1 && size <= 64){
        return size;
    }
    else if(size > 64){
        if(confirm('Picking grid size greater than 64 might lag or crash your browser. Do you want to continue? Cancelling will create default 16x16 grid.')){
            return size;
        }
        else{
            return 16; 
        }
    }
    else{
        return 16;
    }
}
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
function createGrayScale(n){
    for(let i = 0; i < n*n; i++){
        cont.setAttribute('style',`display:grid; width: 650px; height: 650px; grid-template-columns: repeat(${n}, 1fr); grid-auto-rows: auto ; grid-gap: 1px; background-color: #FFF; border: 5px #333 solid;`);
        const newDiv = document.createElement('div');
        newDiv.classList.add('block');
        newDiv.setAttribute('style', 'background-color: #000; opacity: 0;');
        newDiv.addEventListener('mouseenter', (e) => e.target.style.opacity = Number(e.target.style.opacity) + 0.1);
        cont.appendChild(newDiv);
    }
}

const cont = document.getElementById('container');
const newGridBtn = document.getElementById('createNewGrid');
const clearGridBtn = document.getElementById('clearGrid');
const randomBtn = document.getElementById('randomBtn');
const grayScale = document.getElementById('grayScale');
const fillColorValue = document.getElementById('colorPicker');
let color = '#000000';
createGrid(16);
newGridBtn.addEventListener('click', () => createGrid(getGridSize()));
clearGridBtn.addEventListener('click', clearGrid);
randomBtn.addEventListener('click', randomFill);
fillColorValue.addEventListener('change', function(){
    color = fillColorValue.value;
});
grayScale.addEventListener('click', () => createGrayScale(getGridSize()));