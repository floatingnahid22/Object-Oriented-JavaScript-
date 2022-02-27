class User2 {
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

var userOne = new User2('nahid@gmail.com','Nahid');
var userTwo = new User2('hossain@gmail.com','Hossain');

userOne.login()
userTwo.logout()