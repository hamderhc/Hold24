
var listCustomers = JSON.parse(localStorage.getItem('customerInformationList')) || [];
/*
listCustomers.push(new ClassCostumer("Stine","Lønborg","stine-aif@hotmail.com","1234"));
listCustomers.push(new ClassCostumer("Jonathan","Mostov","jmmostov2603@gmail.com","4321"));
listCustomers.push(new ClassCostumer("Ramazan","Akbas","akbas","1996"));
listCustomers.push(new ClassCostumer("Hans-Christian","Albertsen","HC@gmail.dk","1111"));
*/


function login() {
    var userInput = document.getElementById('myUsername').value;
    var passwo = document.getElementById('pwd').value;


    for (var i = 0; i < listCustomers.length; i++) {
        if (userInput == listCustomers[i].firstName && passwo == listCustomers[i].pwd) {
           console.log("you have been logged in as " + userInput);
           return;
        }
        if(userInput =="") {
            console.log("enter username please");
            return;
        }

    }
    console.log("incorrect password or username");

}

function registerNewUser() {
    var registerNewUser = document.getElementById('newUser').value;
    var registerNewPwd = document.getElementById('newPwd').value;
    var verifyNewPassword = document.getElementById('verifyNewPwd').value;
    var information = {
        firstName: document.getElementById('newUser').value,
        pwd: document.getElementById('newPwd').value,
        verifyPwd: document.getElementById('verifyNewPwd').value
    }

    for(var i =0; i< listCustomers.length; i++ ){
        if(registerNewUser == listCustomers[i].firstName) {
            alert("user is taken");
            return;
        }
        if(registerNewPwd.length <8) {
            console.log("Password has to be more than 8 characters");
            return;
        }
        if(registerNewPwd!=verifyNewPassword) {
            console.log("please write the same password as above");
            return;
        }
        if(registerNewUser == null || registerNewUser == "") {
            console.log("username cannot be empty, please choose one");
            return;
        }
    }
    listCustomers.push(information);
    localStorage.setItem('customerInformationList',JSON.stringify(listCustomers));

}

