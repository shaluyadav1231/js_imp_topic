const nameSurname={
    neha:"yadav",
    shalu:"yadav",
    muskan:"singh",
    srashti:"diwadi",
    ankita:"yadav",
};
const names=["neha","shalu","srashti","muskan","yadav"];
const surname2= names.map((element)=>{
    return nameSurname[element];
});


console.log(surname2);




const namesStartWithVowel=[
    "ananya",
    "neha",
    "muskan",

].filter((element)=>{
    return(
        element.startsWith("a")||
        element.startsWith("e")||
        element.startsWith("i")||
        element.startsWith("o")||
        element.startsWith("u")||
    )
})

console.log(namesStartWithVowel);




