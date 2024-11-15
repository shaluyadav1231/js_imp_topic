let num = [1,2,3,4]

//toString convert the arry into string
let b =num.toString()//now the num(array)are changed into string
console.log(b,typeof b);


//join
//joins all the array elements using a seprator
let c =num.join(" and ")
console.log(c,typeof c);
//pop
//remove last element from the array
let r = num.pop();
console.log(num);//poping out the last element
console.log(r);//return the poped element

//push()
//add new element at the end of the array
num.push(6)
console.log(num);


//shift()
//remove first element and return it
num.shift()
console.log(num);

//unsShift()
//add new elemnt to the begning  return new arrar length
num.unshift(7)
console.log(num);

//delete
//array elements can be deleted using the delete operator
delete num[2] //we have to return the index that we want to delete.delete is an operator
console.log(num);

//conCat()
//use to join array to given array
let num1=[1,2,3,4,5,6,7,8,9]
let num2=[11,12,13,14,15,16,17,18,19]
let num3=[211,212,213,214,215,216,2172,218,219]
let num4=num1.concat(num2,num3)
console.log(num4);
console.log(num1,num2);//it doesnot change the existing array

// assending/decending sorting
//assending order
let compare = (a,b)=>{
    return a-b
}
//decending order
let compare2 = (a,b)=>{
    return b-a
}

//sort
//it an arrange our elements into order
//it can modify the original aarray
let num5=[5,3,6,7,2,9,7,2,8]//it can do the alphabatically sort
num5.sort()
console.log(num5);
//assending order
num5.sort(compare)
console.log(num5);
//decending order
num5.sort(compare2)
console.log(num5);

//reverse()
//it can make the element of the array reverse
num5.reverse()
console.log(num5);

//splice and slice
//splice 
//it can firstly take the index of elemnt tha has to delete after that it can take the number that how much we want to delete the elment and the that it can take the value that we want to insert
let a =[1,2,3,4,5,6,6,8]
a.splice(2,4,4535,799657,98865,89076)
console.log(a);//it can modify the delted element

//sclice
//it can silce/remove th eelement that we want to delete
let a1 =[1,2,3,4,4]
let a2=a1.slice(2,4)
console.log(a2);








