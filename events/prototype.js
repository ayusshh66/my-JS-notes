// const user =  function(product, price){
//     this.product = product;
//     this.price = price;
// }

// user.prototype.increment= function(){
//     this.price++
  
// }

// const munmun = new user("razor", 3000);
// munmun.increment()


// protoype 

arr = ["adonis", "golu","kiru"]

const useru = {
    name : "ayus",
    class: 10,

}

Object.prototype.ninnu = function(){
    console.log(`hi ${this.name}`);
    
}


const nextOne = {
    age : 10,
    name: "akku"
}



Array.prototype.changes = function(){
    console.log("texting");
    
}
arr.changes()