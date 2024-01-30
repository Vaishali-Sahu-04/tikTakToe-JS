let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=true;
let newbtn=document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".msgcontain");
let msg=document.querySelector("#msg");

let winning = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[6,5,8],[0,4,8],[2,4,6]
]
let cnt=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        cnt++;
        let iswon = checkWinner();
        if(cnt===9 && !iswon)
        noWinner();
    });
});
const noWinner = () =>{
    msg.innerText="The match was a draw";
    msgcontainer.classList.remove("hide");
    disablebox();
}
const disablebox = () =>{
    for(btn of boxes){
        btn.disabled=true;
    }
}
const enablebox = () =>{
    for(btn of boxes){
        btn.disabled=false;
        btn.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const checkWinner=()=>{
    for(let pattern of winning){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
}
const resetGame = () => {
    msgcontainer.classList.add("hide");
    turn0=true;
    cnt=0;
    enablebox();
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);