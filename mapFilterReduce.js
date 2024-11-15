//morden javascript method
//map mathod 
//create a new array by performing same performing some array
let arr=[243,4759,4749]
let a=arr.map((value,index,array)=>{ //we also do the same thing in array
    console.log(value,index,array);
    return value + 1;    
})

console.log(a);
//map can be use when we make a new array
//forEach can bhe use to perform operation in array's existing element

// filter function

let arr2=[1,2,3,4,8,5]
let a2=arr2.filter((a)=>{
    return a>10
})
console.log(a2);

//reduce function
let arr3=[1,2,3,4,5,6,7]
// let newarr3=arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(newarr3);

let reduce_fun=(h1,h2)=>{
    return h1+h2
}

let newarr3=arr3.reduce(reduce_fun)
console.log(newarr3);
