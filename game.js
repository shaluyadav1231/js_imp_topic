let r="rock";
let p="paper";
let s="scissor";
let player1=prompt("enter your game number");
let player2=prompt("enter your game number");

if ((player1===r) && (player2===p)) {
    alert(" player2 is winner!!!!")
}else if((player1===r) && (player2===s)){
    alert(" player1 is winner!!!!")
}else if((player1===s) && (player2===p)){
    alert("player1 is winner!!!!")
}else{
    alert("answer is tie!!!!")
}

