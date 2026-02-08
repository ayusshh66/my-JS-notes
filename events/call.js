function user(username){
    this.username = username;
    console.log("hi there");
    
}

const userOne =  function(username, age , classStudied){
    user.call(username)
    
    this.age = age;
    this.classStudied = classStudied;
}

const realUser = new userOne("ayush", 19, 11)
console.log(realUser);



