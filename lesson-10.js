function UserSix(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

UserSix.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

UserSix.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

var userOne = new UserSix('nahid@gmail.com','Nahid');
var userTwo = new UserSix('hossain@gmail.com','Hossain');

console.log(userOne);
userTwo.login();