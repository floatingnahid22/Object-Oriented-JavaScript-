function User5(email,name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }

}

var userOne = new User5('nahid@gmail.com','Nahid');
var userTwo = new User5('hossain@gmail.com','Hossain');
console.log(userOne);
userTwo.login();
