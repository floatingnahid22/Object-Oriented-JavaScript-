var userOne = {
    email: 'nahid@gmail.com',
    name: 'Nahid',
    age: '25',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    },
    logInfo() {
        console.log(this.name, this.age, this.email);
    }
};

var prop = 'name'


//changing properties
// userOne.email = 'nahid@gmail.com';
// userOne['email'] = 'nahid@gmail.com';
// userOne[prop] = 'Nahid';

// console.log(userOne);

// userOne.age = 25;
// userOne.logInfo = function() {
//     console.log(this.name, this.age, this.email);
// };

userOne.logInfo();
userOne.login();
userOne.logout();