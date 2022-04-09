const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
var fs = require("fs")
fs.writeFileSync("practise.json", text, (null, 3))
    // console.log(obj)

// const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");
// console.log(text)
// console.log(obj.age())

// var list=[{a:"by",b:"hi",c:"hy",d:"my"}]
// // var list=JSON.stringify(list)
// // var list=JSON.parse(list)
// // console.log(typeof(list))
// // console.log(list)
// var d={b:"my",c:"name",d:"manisha"}
// var fs=require("fs")
// var a=fs.openSync("myfile.json","w")
// list.push(d)
// fs.writeFileSync(a,JSON.stringify(list,null,4))
// // fs.appendFileSync(a,JSON.stringify(d,null,4))
// console.log(list)






// let a=3+2j
// let b=2+3j
// console.log(a+b)

// var arr=[234,44,23,51]
// var i=0
// var s=[]
// while(i<arr.length){
//     var k=arr[i]%10
//     s.push(k)
//     i++
// }
// console.log(s)

// var i=65
// var s=""
// while(i<=69){
//     var j=65
//     while(j<=i){
//         s+=String.fromCharCode(j)
//         j+=1

//     }s+="\n"
//     i+=1
// }
// console.log(s)





// const fs = require('fs')
// const content = 'Some content!'
// try {
//   fs.writeFileSync('test.txt', content)
//   //filewritten successfully
// } catch (err) {
//   console.error(err)
//   fs.appendFile("test.txt","dfgh")
// //   fs.appendFile("text")
// }


// var a={b:5,c:9}
// console.log(a["b"])
// console.log(a.b)

// var a=[]
// console.log(a[0])

// console.log(!(true && false) || (false && true))


// ternary operator
// function gfg() {  
//     //JavaScript to illustrate 
//    //Conditional operator 

//    let PMarks = 40 
//    let result = PMarks > 399? 
//        "Pass":"Fail"; 

// console.log(result); 
//    } gfg()