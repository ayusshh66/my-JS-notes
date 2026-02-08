class user {
    constructor(username){
        this.username=username
    }
    capitalise(){
        console.log(`${this.username.toUpperCase()}`);
        
    }
}

class gamer extends user {
    constructor(username , gameName){
        super(username)
        this.gameName =  gameName
    }

    greeting(){
        console.log(`hi ${this.username} this is your gaming name ${this.gameName}`);
        
    }
}

const gamerOne  = new gamer("ayush", "hotypoty69")
console.log(gamerOne);
gamerOne.greeting()
