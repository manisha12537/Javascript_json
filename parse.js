// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 
// const obj = JSON.stringify(text);
// console.log(obj)

const { setTimeout } = require("timers/promises");

// var readlinesync=require("readline-sync")
// var password=readlinesync.question("enter the password")
// for(var i in password){
// if(password[i]=="@"||password[i]=="#"||password[i]=="$"){
//     if(password[i]>="a" && password[i]<="z"){
//         if(password[i]>="A" && password[i]<="Z"){
//             if(password[i]>="1" && password[i]<="0"){
//                 console.log("password is strong")
//             }else{// const path = require("path/win32")
// const { stringify } = require("querystring")
//                 console.log("weak password")
//             }
//         }else{
//             console.log("upper_case")
//         }
//     }else{
//         console.log("lower_case")
//     }
// }else{
//     console.log("special_charactor")
// }

// }


// var j=e=w=q=false
// var p="h@sAS"
// // if(p.length>6 && p.length<15){
// //     j=true
// // }
// for(var k of p){
//     if(k>"1" && k<"9"){
//     j=true
// }if(k>"a" && k<"z"){
//     q=true
// }if(k>"A" && k<"Z"){
//     w=true
// }if(k=="!" || k=="@" || k=="#" || k=="$" || k=="%" || k=="^" || k=="&"){
//     e=true
// }}
// if(p.length>6 && p.length<12){
//     if(j && q && w && e){
//     console.log("s")}
// }else{
//     console.log("w")
// }
// // console.log(j,q,w,e)


// function fun(a, b) {
//     return Math.abs(a - b)
// }
// console.log(fun(5, 7))

// var a = {
//     b: 8,
//     c: 9

// }
// if ("j" in a === false) {
//     a.j = 6
// }
// console.log(a.j)
function fun() {
    setTimeout(() => console.log(1), 0)
}
fun()