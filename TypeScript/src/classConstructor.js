

class User{
    constructor(name, age, gender){
        this.username = name,
        this.age = age,
        this.gender = gender
    }

    greet(){
        return `hello ${this.username} is ur age ? ${this.age} and gender ${this.gender}?`
    }
}






// const me = new User("ayush", 21, "male")

// console.log(me.greet())