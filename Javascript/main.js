function createGrid(n){
    for(let i = 0; i < n*n; i++){
        cont.setAttribute('style',`display:grid; width: 960px; height: 960px; grid-template-columns: repeat(${n}, 1fr); grid-auto-rows: auto ; grid-gap: 1px`);
        const newDiv = document.createElement('div');
        newDiv.classList.add('block');
        newDiv.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'red');
        cont.appendChild(newDiv);
    }
}
function removeGrid(){
    const divElem = document.querySelectorAll('#container > .block');
    divElem.forEach((ele) => {
        cont.removeChild(ele);
    });
}

const cont = document.getElementById('container');
const btn = document.getElementById('createNewGrid');
createGrid(16);
btn.addEventListener('click', function(){
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
// const elems = document.querySelectorAll('#container > .block');
// elems.forEach((elem) => elem.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'red'));
