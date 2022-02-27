function UserFive(email,name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }

}

var userOne = new UserFive('nahid@gmail.com','Nahid');
var userTwo = new UserFive('hossain@gmail.com','Hossain');
console.log(userOne);
userTwo.login();
