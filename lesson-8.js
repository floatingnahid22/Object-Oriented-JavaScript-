class User4 {
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

class Admin extends User4 {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }

}

var userOne = new User4('nahid@gmail.com','Nahid');
var userTwo = new User4('hossain@gmail.com','Hossain');
var admin = new Admin('md@gmail.com','Md');

var users = [userOne,userTwo, admin];

//admin.deleteUser(userTwo);
admin.deleteUser(userOne);


console.log(users);