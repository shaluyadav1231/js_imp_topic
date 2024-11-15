// document.write(new Date());
// console.log("");
// document.write(new Date("2024-02-02"));


// Date=prompt("enter the day")
// if date

// const date =new Date();
// document.write(Date.getDate());

// const Date = new Date();
// // document.write(new Date());

// date=prompt("enter the date")

// if(date==Date) {
//     document.write(date)
const date = new Date(prompt("enter the date"));
document.write("Day is :"+date.getDate());
if(date.getDay()===0){
    document.write("sunday")
}
if(date.getDay()===1){
    document.write("monday")
}
if(date.getDay()===2){
    document.write("tuesday")
}
if(date.getDay()===3){
    document.write("wednesday")
}
if(date.getDay()===4){
    document.write("thursday")
}
if(date.getDay()===5){
    document.write("friday")
}
if(date.getDay()===6){
    document.write("saturday")
}
