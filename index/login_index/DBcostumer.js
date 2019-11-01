
var listCustomers = JSON.parse(localStorage.getItem('customerInformationList')) || [];
/*Gør at errormessage bliver stående på siden og ikke forsvinder før man reloader.*/
document.getElementById("newBtn").addEventListener("click", function(event){
    event.preventDefault()
});
/*
listCustomers.push(new ClassCostumer("Stine","Lønborg","stine-aif@hotmail.com","1234"));
listCustomers.push(new ClassCostumer("Jonathan","Mostov","jmmostov2603@gmail.com","4321"));
listCustomers.push(new ClassCostumer("Ramazan","Akbas","akbas","1996"));
listCustomers.push(new ClassCostumer("Hans-Christian","Albertsen","HC@gmail.dk","1111"));
*/

/*Opretter funktion til at logge ind med allerede oprettede brugere*/
function login() {
    var userInput = document.getElementById('myUsername').value; /*Henter data fra html brugernavn boks.*/
    var passwo = document.getElementById('pwd').value; /*Henter data fra html kodeord boks.*/

/*Når du logger ind tjekker den om brugernavn eksisterer og om password er korrekt.*/
    for (var i = 0; i < listCustomers.length; i++) {
        /*Hvis brugernavnet(fornavnet) og kodeordet er defineret i listcostumers bliver man logget ind. */
        if (userInput == listCustomers[i].firstName && passwo == listCustomers[i].pwd) {
        //    alert("You have been logged in as " + userInput)
          console.log("you have been logged in as " + userInput);
           window.open('../index.html');
        }
        /*Hvis boksen til brugernavnet(fornavnet) er tom skriver den enter username please.*/
        if(userInput =="") {
          //alert("Enter username please")
            console.log("enter username please");
            return;
        }
        /*Hvis boksen til kodeordet er tom skriver den enter password please.*/
        if(passwo =="") {
        //alert("Enter password please")
            console.log("enter password please");
            return;
        }
    }
    console.log("incorrect password or username");
}

/*Opretter en funktion til at oprette nye brugere*/
function registerNewUser() {
    /*Opretter variable til boksene i html*/
    var registerNewUser = document.getElementById('newUser').value;
    var information = {
        firstName: document.getElementById('newUser').value,
        pwd: document.getElementById('newPwd').value,
        verifyPwd: document.getElementById('verifyNewPwd').value
    };

    for(var i =0; i< listCustomers.length; i++ ){
        if(registerNewUser == listCustomers[i].firstName) {
            console.log("User is taken");
            return;
        }
    }

    if(validateUser() == false) {
        return;
    }
    else {
        listCustomers.push(information);
        localStorage.setItem('customerInformationList', JSON.stringify(listCustomers));
        alert("Du har nu oprettet en bruger")
    }
}

function validateUser() {
    var registerNewUser = document.getElementById("newUser").value;
    var registerNewPwd = document.getElementById('newPwd').value;
    var verifyNewPassword = document.getElementById('verifyNewPwd').value;
    var getErrorMessage = document.getElementById('error_message');
    var text;

    getErrorMessage.style.padding = "10px";

    if(registerNewUser == null || registerNewUser == "") {
        text= "Username cannot be empty, please choose one";
        getErrorMessage.innerHTML = text;
        // console.log("Username cannot be empty, please choose one");
        console.log(getErrorMessage.innerHTML)
        return false;
    }

    if(registerNewPwd.length < 8) {
        text = "Password has to be more than 8 characters";
        getErrorMessage.innerHTML = text;
        console.log(getErrorMessage.innerHTML)
        return false;

    }
    if(registerNewPwd!=verifyNewPassword) {
        text = "Please write the same password as above";
        getErrorMessage.innerHTML = text;
        console.log(getErrorMessage.innerHTML)
        return false;
    }
}
