
//question no.1
console.log("har\"".length);

//question no.2
//it can show that the word is present or not present in the sntence
const sentence='the quick brown fox jumps over the lazy dog';
const word = 'cat'
console.log(`the word "${word}"${sentence.includes(word)? 'is':'is not '} in the sentence`,);

//startsWith
const work ="i'm working with clint"
console.log(work.startsWith("i'm "));
console.log(work.startsWith("no"));
//endsWith
console.log(work.endsWith("clint"));
console.log(work.endsWith("no"));


//question no.3
const str ="HELLO I'M SHALU YADAV"
console.log(str.toLowerCase());

//question no.4
let str2 = "please give Rs 1000"
let amount=str2.slice("please give Rs ".length)
console.log(amount);


//question no.5
let friend ="shalu"
friend[3]="p"
console.log(friend );//it can not change because string are imutable
