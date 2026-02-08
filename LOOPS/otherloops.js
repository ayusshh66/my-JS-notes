// for of loops;
const arr = [23,23,4,5]
for (const i of arr){
    //console.log(i);
    
}

// so the " for of " function is for MAP AND ARRAY, it does not give keys and values for an object

const mapu = new Map()
mapu.set("ayush ", "ayu")
mapu.set("aditi", "akku")
 for (const [key, value] of mapu){
    //console.log(key, value);
    
 }

 // objects are not iterable thats why we can not use " for of loop" in it 
const obj =  {
    name : " adonis",
    age : " 19",
    class : 1
}

// for (const key of obj){
//     //console.log(key);
    
// }

// for object we use for in loop;

// for(const i in obj){
//     console.log( `the nickname of ${i} is ${obj[i]} `)
    
// }


                                   
