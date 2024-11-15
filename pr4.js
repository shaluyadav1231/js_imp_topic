//question 1
// let arr=[1,2,3,4,5]
// let a=prompt("enter the array")
// a=Number.parseInt(a)
// arr.push(a);
// console.log(arr);


// //question 2
// let arr=[1,2,3,4,5]
// let a;
// do {
//      a=prompt("enter the array")
//      a=Number.parseInt(a)
//      arr.push(a);
// } while (a!=0);
// console.log(arr);


// // question 3
// let arr1=[85,96,84,40,55]
// let n =arr1.filter((x)=>{
//     return x % 10 == 0
// })
// console.log(n);


// let a=[1,2,3,4]
// a.forEach((i) => {
//     console.log(i*i);
    
// });

// //question 4
// let a=[1,2,3,4]
// let n=a.map((x)=>{
//     return x*x
// })

//question 5

let a=[1,2,3,4]
let n=a.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n);
