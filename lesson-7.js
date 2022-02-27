class UserThree {
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }   

    login(){
        console.log(this.email, 'has logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email+'\'s', 'score is now', this.score);
        return this;
    }

}

var userOne = new UserThree('nahid@gmail.com','Nahid');
var userTwo = new UserThree('hossain@gmail.com','Hossain');

userOne.login().updateScore().logout();