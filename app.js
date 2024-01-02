let gameSeq = [];
let userSeq = [];
let colArr = ["yellow","green","purple","red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started == false){
        started = true;
    }
    levelUp();
});


function gameFlash(color){
    color.classList.add("gameflash");
setTimeout(() => {
    color.classList.toggle("gameflash");
}, 250);
}


function userFlash(color){
    color.classList.add("userflash");
setTimeout(() => {
    color.classList.toggle("userflash");
}, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randNum = Math.floor(Math.random()*3);
    let randCol = colArr[randNum];
    let btnDiv = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(btnDiv);
}


function checkAns(idx){
if(gameSeq[idx] === userSeq[idx]){
    if(gameSeq.length === userSeq.length){
    setTimeout(levelUp,1000);
}
}
else{
    h2.innerHTML = `<b>Game Over! <br>Your Score Was ${level} <br>Press Any Key To Start The Game</b>`;
    document.querySelector("body").style.backgroundColor = "red"

    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor = "white"

    },150)
    reset()
}
}


function btnPress(){
    let btn = this;
    userFlash(btn);

   let userCol = btn.getAttribute("id");
   userSeq.push(userCol);
    checkAns(userSeq.length-1);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = []
    level = 0;
    
}
