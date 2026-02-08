function user(username , age , loginId ){
    this.username = username;
    this.age= age;
    this.loginId = loginId;

    return this;
    

}
const userOne =  user("ayush", 19 ,  true)

// console.log(userOne.username);
// console.log(userOne);

// so here the catch, if i make another user then it will chnage the prev user date so we need to add "new"
// so that new memory will allocate to it, thats called constructor 

const userTwo = new user("akku", 16, false)
console.log(userOne);
