// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("the data has been uploaded");
//         resolve()
//     },2000)

// })
// promiseOne.then(function(){
//     setTimeout(function(){
//         console.log("yes we have done all work that is given");
        
//     },5000)
// })

// const promiseTwo = new  Promise(function(resolve,reject){
//     setTimeout(function(){
//         const error = true ;
//         if(!error){
//             console.log("everything is been uploading ");
            
//         } else {
//             console.log("ahhh here we go again!");
            
//         }
//         resolve();
//     },2000)
// }).then(function(x){
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name : "aditi hemdani", fname : "s.hemdani", class : 11})
//     },2000)
// }).then(function(data){
//      console.log(data, `i did it`);
    

//  })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name : "aditi hemdani", fname : "s.hemdani", class : 11})
        

//     },2000)
// }).then(function(user){
//     console.log(user);
//     return user.name;
    
// }).then(function(xx){
//     console.log(xx);
    
// })

// ❌ You see nothing, because:

// return data does NOT print

// It just passes data to the NEXT .then()

// And you don’t have another .then() to receive it


fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
    return response.json();


})
.then(function(data){
    return data.login;
    
})
.then(function(username){ 
console.log(username);

})
.catch(function(x){
    console.log(x)
})