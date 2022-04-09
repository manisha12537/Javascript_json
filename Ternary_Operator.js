// var a=8
// var x=typeof(a)=="number"?"its a number":"not a number";
// console.log(x)



//MULTIPLE CONDITION IN TERNARY OPERATOR
var readlinesync=require("readline-sync")
var num_1=readlinesync.questionInt("enter number")
var num_2=readlinesync.questionInt("enter number")
var num_3=readlinesync.questionInt("enter number")
var result=num_1>num_2 && num_1>num_3?"num_1 is greter":num_2>num_1 && num_2>num_3?"num_2 is greter":num_3>num_1 && num_3>num_2?"num_3 is greter":"thris are same value";
console.log(result)