// var str=""
// var count=0
// for(var x=0;x<6;x++){
//     for(var y=0;y<x;y++){
//         str+=String.fromCharCode(count+65)
//         count++
//     }str+="\n"
// }console.log(str)


// var str=""
// var count=15
// for(var i=0;i<5;i++){
//     for(var j=0;j<5-i;j++){
//         str+=String.fromCharCode(count+65)
//         count--
//     }str+="\n"
// }console.log(str)


// var str=""
// var d=6
// for(var i=0;i<=d;i++){
//     for(var j=0;j<d-i;j++){
//         str+=" "
//     }for(k=0;k<2*i-1;k++){
//         str+="*"
//     }str+="\n"
// if(i==d){
//     for(x=0;x<d;x++){
//         for(y=0;y<x;y++){
//             str+=" "
//         }for(z=0;z<2*(d-x)-1;z++){
//             str+="*"
//         }str+="\n"
//     }
// }
// }console.log(str)



// var str=""
// var k=6
// for(var i=0;i<=k;i++){
//     for(var j=0;j<i;j++){
//         str+="*"
//     }str+="\n"
// if(i==k){
//     for(x=0;x<k;x++){
//         for(var y=0;y<k-x-1;y++){
//             str+="*"
//         }str+="\n"
//     }
// }
// }console.log(str)


// var str=""
// var k=6
// for(var i=0;i<=k;i++){
//     for(var j=0;j<i;j++){
//         str+=" "
//     }for(var l=0;l<2*i-1;l++){
//         str+="*"
//     }str+="\n"
// if(i==k){
//     for(var x=0;x<k;x++){
//         for(var z=0;z<k-i;z++){
//             str+=" "
//         }
//         for(var y=0;y<2*(k-x)-1;y++){
//             str+="*"
//         }str+="\n"
//     }
// }
// }console.log(str)


// var str=""
// var s=6
// for(var i=0;i<s;i++){
//     for(var j=0;j<s-i;j++){
//         str+=" "
//     }for(var k=0;k<2*i-1;k++){
//         str+=j
//     }str+="\n"
// }console.log(str)


// var str=""
// var s=7
// for(var i=0;i<s;i++){
//     for(var j=0;j<s-i;j++){
//         str+=String.fromCharCode(j+65)
//     }str+="\n"
// }console.log(str)


// var a=[['a', 'b'], ['b', 'c', 'd'], ['e', 'f']]
// var b=[['p', 'q'], ['p', 's', 't'], ['u', 'v', 'w']]
// // Join the said two lists element wise:
// // [['a', 'b', 'p', 'q'], ['b', 'c', 'd', 'p', 's', 't'], ['e', 'f', 'u', 'v', 'w']]
// var arr=[]
// var i=0
// while(i<b.length){
//     var arr_2=[]
//     var j=0
//     while(j<b[i].length){
//         arr_2.push(b[i][j])
//         j++
//     }var k=0
//     while(k<a[i].length){
//         arr_2.push(a[i][k])
//         k++
//     }arr.push(arr_2)
//     i++
// }console.log(arr)



// var a=['Red', 'Maroon', 'Yellow', 'Olive']
// var i=0
// var arr=[]
// while(i<a.length){
//     var j=0
//     var arr_2=[]
//     while(j<a[i].length){
//         arr_2.push(a[i][j])
//         j++
//     }arr.push(arr_2)
//     i++
// }console.log(arr)

// var a=['0', '1', '2', '3', '4']
// var b=['red', 'green', 'black', 'blue', 'white']
// var c=['100', '200', '300', '400', '500']
// var i=0
// var arr=[]
// while(i<a.length){
//     arr.push(a[i]+b[i]+c[i])
//     i++
// }console.log(arr)


// var a=[2, 3, 9, 8, 2, 0, 39, 84, 2, 2, 34, 2, 34, 5, 3, 5]
// var i=0
// while(i<3){
//     a.pop(a[i])
//     i++
// }console.log(a)


// var a=[3, 8, 9, 4, 5, 0, 5, 0, 3]
// // Add 3 to each element in the said list:
// // [6, 11, 12, 7, 8, 3, 8, 3, 6]
// var arr=[]
// var i=0
// while(i<a.length){
//     arr.push(a[i]+3)
//     i++
// }console.log(arr)


// var a=[1, 2, 3, 4, 5]
// // [[1, 2], [2, 3], [3, 4], [4, 5]]
// var arr_2=[]
// var i=0
// while(i<a.length){
//     var arr=[]
//     arr.push(a[i],a[i]+1)
//     i++
//     arr_2.push(arr)
// }
// console.log(arr_2)


// var a=['1', '2', '3', '4', '5', '6', '7', '8']
// // Join adjacent members of a given list:
// // ['12', '34', '56', '78']
// var i=0
// var arr=[]
// while(i<a.length){
//     if(i%2==0){
//         var c=i+1
//         arr.push(a[i]+a[c])

//     }i++
// }
// console.log(arr)


// var a=[1234, 722, 1984, 19372, 900]
// var i=0
// var arr=[]
// while(i<a.length){
//     var b=String(a[i])
//     var k=0
//     while(k<b.length){
//         k++
//     }
//     arr.push(b[k-1])
//     i++
// }
// console.log(arr)


// var arr=[1, 1, 1, 64, 23, 64, 22, 22, 22]
// var arr_2=[]
// var arr_3=[]
// for(var i=0;i<arr.length;i++){
//     if(!arr_2.includes(arr[i])){
//         arr_2.push(arr[i])
//     }
// }
// for(var k=0;k<arr_2.length;k++){
//     var count=0
//     for(var l=0;l<arr.length;l++){
//         if(arr[l]==arr_2[k]){
//             count+=1
//         }
//     } if(count>=3){
//         arr_3.push(arr_2[k])
//     }

// }console.log(arr_3)




// var arr=[12, 45, 23, 67, 78, 90, 45, 32, 100, 76, 38, 62, 73, 29, 83]
// // Split the said list into equal size 3
// // [[12, 45, 23], [67, 78, 90], [45, 32, 100], [76, 38, 62], [73, 29, 83]]
// var i=0
// var list_2=[]
// while(i<arr.length){
//     var list=[]
//     var j=i
//     while(j<i+3){
//     list.push(arr[j])
//     j++}
//     i=j
//     list_2.push(list)
// }
// console.log(list_2)





// var arr=[[0, 1, 2], [2, 4, 5]]
// var i=0
// var count=0
// while(i<arr.length){
//     var j=0
//     var count_1=0
//     while(j<arr[i].length){
//         count_1+=1
//         j++
//     }
//     count+=1
//     i++
// }
// console.log(count_1,count