

function result(){
    
    let shape = document.getElementById(`shape`).value;
    let width = document.getElementById(`width`).value;
    let height = document.getElementById(`height`).value;
    let bradius = document.getElementById(`bradius`).value;
    let color= document.getElementById(`color`).value;
let res = document.querySelector(`.res`)

res.style.width = width;
res.style.height = height;
res.style.background = color;
res.style.borderRadius = bradius;
res.style.shape = shape;
}
