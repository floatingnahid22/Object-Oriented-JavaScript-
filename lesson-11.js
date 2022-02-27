function UserSeven(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

UserSeven.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

UserSeven.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

function AdminTwo(...args){
    UserSeven.apply(this, args);
}

AdminTwo.prototype = Object.create(UserSeven.prototype);

AdminTwo.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new UserSeven('nahid@gmail.com', 'Nahid');
var userTwo = new UserSeven('hossain@gmail.com', 'Hossain');
var adminOne = new AdminTwo('md@gmail.com', 'Md');

var UserSevens = [userOne, userTwo, adminOne];