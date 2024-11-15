//we use loops to perform repeating action

//for loop
// for (i=0;i<100;i++){
//     console.log(i+1);
    
// }

//program to add first n natural number

// sum=0
// let n=prompt("enter the number")
// n=Number.parseInt(n)

// for (i=0; i<n;i++){
//     sum +=(i+1)
//     console.log((i+1),"+");
    
    
// }

// console.log("sum of first" ,n , "natural number is" ,sum);

// finding factorial

// mul =0
// let m =prompt("enter the value of m")
// m=Number.parseInt(m)

// for(i=0; i<m; i++){
//     mul *=(i+1)
//     console.log((i+1),"*");
    
// }

// console.log("factorial number of",m,"is",mul);


// let obj ={
//     neha:23,
//     shalu:26,
//     srashti:24,
//     muskan:23   
// }
// //for in loop
// for(let a in obj){
//     console.log("marks of student",a,"are",obj[a]);
    
// }

// //for of loop
// for(let b of "neha"){
//      console.log(b);
     
// }

//while loop

// let n=prompt("enter the value of n")
// n=Number.parseInt(n)

// let i =0

// while (i<n) {
//     console.log(i);
//     i++
// }


// do while loop

// let n=prompt("enter the value of n")
// n=Number.parseInt(n)

// let i =10

// do{
//     console.log(i);
//     i++;
// }
// while (i<n) 


let num = [1,2,3,4,5,6,7,8,9]
for(i=0;i<num.length;i++){
    console.log(num[i]);
    
}

num.forEach((i)=>{
    console.log(i*i);
    
})

//for of 
//short way to solve the problem of array
for(let i of num){
    console.log(i);
    
}
//for in 
for(let i in num){
    console.log(i);
    
}