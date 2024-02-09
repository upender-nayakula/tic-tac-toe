
let allBoxes=document.querySelectorAll(".box"); 
let resetButton=document.querySelector("#reset-button");
let newGame=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-container");
let turnO=true; //playerX,player O and here playerO is active

//Total winning patterns in the game.
let winning_patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg_container.classList.add("hide");
}



allBoxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("button was clicked");
        if(turnO){
            box.innerText="O" //player O
            turnO=false;
            
        }
        else{
            box.innerText="X" //playerX
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of allBoxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of allBoxes){
        box.disabled=false;
        box.innerText="";
    }
};




const showWinner=(winner)=>{
    msg.innerText=`congratulations,Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
};



const checkWinner=()=>{
    for(let pattern of winning_patterns){
        /*console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
        allBoxes[pattern[0]].innerText,
        allBoxes[pattern[1]].innerText,
        allBoxes[pattern[2]].innerText
        );*/
        let pos1=allBoxes[pattern[0]].innerText;
        let pos2=allBoxes[pattern[1]].innerText;
        let pos3=allBoxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                //console.log("Winner",pos1);
                showWinner(pos1);
            
            }
        }
    }
}
newGame.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);