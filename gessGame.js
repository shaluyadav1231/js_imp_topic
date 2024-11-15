let x=Math.floor(Math.random()*101);
let gessNumber=prompt("Enter the number");
gessNumber=Number.parseInt(gessNumber)
if(gessNumber==x){
    console.log("congractulations you win the tha game");
    console.log("you gess the write number");
   
}else if (gessNumber<x){
    console.log("you gess the wrong number");
    console.log("your number is less than the x");
    console.log("try again");
    prompt("try again")
    if(gessNumber==x){
        console.log("congractulations you win the tha game");
        console.log("you gess the write number");
    }else if (gessNumber>x){
        console.log("you gess the wrong number");
        console.log("your number is greater than the x");
        console.log("try again"); 
        
    }else if (gessNumber<x){
        console.log("you gess the wrong number");
        console.log("your number is less than the x");
        console.log("try again");
        prompt("try again")
    } 
     
}else if (gessNumber>x){
    console.log("you gess the wrong number");
    console.log("your number is greater than the x");
    console.log("try again");
    prompt("try again")
    if(gessNumber==x){
        console.log("congractulations you win the tha game");
        console.log("you gess the write number");
    }else if (gessNumber>x){
        console.log("you gess the wrong number");
        console.log("your number is greater than the x");
        console.log("try again"); 
        
    }else if (gessNumber<x){
        console.log("you gess the wrong number");
        console.log("your number is less than the x");
        console.log("try again");
        prompt("try again")
    } 
    
}else{
    console.log("you don't gess anu number");
    prompt("try again")
    if(gessNumber==x){
        console.log("congractulations you win the tha game");
        console.log("you gess the write number");
    }else if (gessNumber>x){
        console.log("you gess the wrong number");
        console.log("your number is greater than the x");
        console.log("try again");   
        prompt("try again")
    }else if (gessNumber<x){
        prompt("try again");
        console.log("you gess the wrong number");
        console.log("your number is less than the x");
        console.log("try again");
    } 
}
prompt("try again")     