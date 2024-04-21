var menu = document.querySelector(".nav-2");
const overlay = document.querySelector('.overlay');
const boxes =document.querySelector(".box");
const alexa = document.querySelector(".alexa");
const box1 = document.querySelector(".box-1");
const left = document.querySelector("#left-icon");
function openmenu() {
    menu.style.left = "0";
    overlay.style.opacity = '50%';
    overlay.style.pointerEvents= "all";
    boxes.classList.add("element");
    
    // clos.classList.remove("element");
    // overlay.style.display = 'block';

}

function closemenu() {
    // overlay.style.display = 'none';
    overlay.style.opacity = '0%';
    overlay.style.pointerEvents= "none";
    menu.style.left = "-400px";
     boxes.classList.remove("element");
     box1.style.left ="-400px";
    // clos.style.display="none";
    
}

overlay.addEventListener('click', ()=> {
    // overlay.style.display = 'none';
    overlay.style.opacity = '0%';
    overlay.style.pointerEvents= "none";
    boxes.classList.remove("element");
    menu.style.left = "-400px";
    box1.style.left = "-400px"
}); 

alexa.addEventListener('click', ()=>{
    box1.style.left ="0px";
    menu.style.left="-400px"
})


left.addEventListener('click' , () =>{
    box1.style.left = "-400px";
    menu.style.left = "0px";
});