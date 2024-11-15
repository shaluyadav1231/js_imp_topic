//chapter 2 questons
// question 1

let age5 = prompt("enter your age")

if (age5>10 && age5 < 20){
    console.log("youe age lies between 10 and 20");
    
}else{
    console.log("youe age doesn't lies between 10 and 20");
    
} 

// name of the weeks

let days= prompt("enter the days")
days=Number.parseInt

switch (days){
    case "days-1":
        console.log("monday");
    case "days-2":
        console.log("tuesday");
    case "days-3":
        console.log("wednesday");
    case "days-4":
        console.log("thursday");
    case "days-5":
        console.log("friday");
    case "days-6":
        console.log("saturday");
    case "days-7":
        console.log("sunday");
    default:
        console.log("you entered wrong number");

}
//question 2
let age = prompt("enter your age")
age=Number.parseInt(age)
switch (age) {
    case "12":
        console.log("your age is 12");
        break
    case "13":
        console.log("your age is 13");
        break
    case "14":
        console.log("your age is 14");
        break
    case "15":
      default:
        console.log("your age is not special");
        
} 

//question no.3

let num =prompt("enter the number")
num=Number.parseInt(num)

if (num%2 == 0 && num%3 == 0){
    console.log("number is completly divisible by 2 and 3");
    
}else{
    console.log("not divisible by 2 and 3");
    
}


//question no.4
let num1 =prompt("enter the number")
num1=Number.parseInt(num1)

if (num1%2 == 0 || num1%3 == 0){
    console.log("number is  divisible by 2 or 3");
    
}else{
    console.log("not divisible by 2 and 3");
    
}


// question Node.4

let age1=prompt("enter your age")

if (age1<18){
    console.log("you cannot drive")
}else{
    console.log("you can drive");
    
}


//using terniory operator
let age2=20
let a = age2>18?"you can drive":"you can not drive"
console.log(a);
