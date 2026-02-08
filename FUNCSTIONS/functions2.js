// ... will work as rest operator whcih will give all the values in argument 
// even after giving just 1 value in parameter 

// function numm(...number){
//     return number
// }
// console.log(numm())
 
// function nunnu(val1,val2,...shee){
//     return shee
//}
// console.log(nunnu(, , 3002));

// function tutu(anyobj){
//     x = console.log(`the name ${anyobj.name} and the father name ${anyobj.fname}`);
//     return x
    
// }

// // const mummy = Symbol("mm")
//  y = {
//     name : "ayush",
//     fname : "shiv",
//     // [mummy] : "okay"
//  }
// //  console.log(tutu(y));
// // console.log(y[name]);
// console.log(tutu({name : "akku",
//     fnames : "shiv"
// }));
// function r2(wow){

//     return wow[1]

// console.log(r2([200,300,400]));
// console.log(r2([200,300,400]));
// console.log(r2([200,300,400]));
// console.log(r2([200,300,400]));
// console.log(r2([200,300,400]));
// console.log(r2([200,300,400]));
// }

// if we dont declare a function constant then we can use it anywhere above/below the function

// function sumone(nm){
//     k = nm + 1;
//     return k;
// }

// console.log(sumone(4));

// if we declare a function as a constant then it will only be able to use below the function
 

const sumof2 = function sumtwo(nm) {
    return nm + 2;
    
}

console.log(sumof2(3));



