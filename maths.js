// let x = Math.random();//0----1
// console.log(x);

// let x1 = Math.random()*10;//0----9
// console.log(x1);

// let x2 =Math.floor( Math.random()*101);//to generate non-decimal value we can use (maths.floor)
// console.log(x2);

// let x3 =Math.floor( Math.random()*10)+1;//1 to 10
// console.log(x3);

function getRandom(min,max) {
    let x4 =Math.floor( Math.random()*(max-min)+min);//it cannot include max value
    return x4
}

console.log(getRandom(1,20));

function get_Random(min,max) {
    let x5 =Math.floor( Math.random()*(max-min+1)+min);//it can include max value
    return x5
}

console.log(getRandom(1,20));
