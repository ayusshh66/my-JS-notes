 // creating object {}
 //use a symbol as a key 
 const msymbol = Symbol("kayo")   
  const obj = {
    name : "Ayush Hemdani",
    "class" : 11,
    age : 19,
    female : false,
    [msymbol] : undefined
  }
// console.log(obj);

console.log(obj["class"]);
console.log(obj[msymbol]);




// obj.greeting = function(){
//   console.log(`hi user ${this.name}`);
//}
  
// console.log(obj.greeting())
// obj.greeting2= function(){
//   console.log("hello user ");
  
// }
// console.log(obj.greeting2());

// const user = {
//   name : "adonis",
//   age : 19,
//   IsLogin : false,
//   Symbol : "key"
// }
// console.log(user);

