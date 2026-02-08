// const promisOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve();
//         console.log("Ayush was here");
        
//     }, 4000)
// })
// promisOne.then(function(){
//     console.log("acha g aisa h kya");
    
// })

const promisThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("ayush g");
    resolve([1,2,3,3,4])
    

        
    }, 6000);
})
promisThree.then(function(x){
    console.log(x);
    

})