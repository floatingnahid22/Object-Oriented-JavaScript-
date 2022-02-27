class UserTwo {
    constructor(email,name){
        this.email = email;
        this.name = name;
    }   

    login(){
        console.log(this.email, 'has logged in');
    }
    logout(){
        console.log(this.email, 'has logged out');
    }

}

var userOne = new UserTwo('nahid@gmail.com','Nahid');
var userTwo = new UserTwo('hossain@gmail.com','Hossain');

userOne.login()
userTwo.logout()