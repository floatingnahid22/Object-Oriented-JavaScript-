var userOne = {
    email: 'nahid@gmail.com',
    name: 'Nahid',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    },
};

console.log(userOne.name);