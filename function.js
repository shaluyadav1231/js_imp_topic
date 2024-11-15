function OnePlusAverage(x,y){
    return Math.round(1+(x,y)/2) //using maths round function
}

let a=1;
let b=2;
let c=3;

console.log(OnePlusAverage(a,b));
console.log(OnePlusAverage(b,c));
console.log(OnePlusAverage(c,a));



//function usin arrow function
const sum = (p,q) =>{
    return p + q
}

console.log(sum(2,8));


//function without argument

const hello =()=>{
    console.log("hey how are you.i am toh fine yarr");
    return "hii"
    
}
let v = hello();
console.log(v);



