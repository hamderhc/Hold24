/*LogIn css er lavet med inspiration fra denne video
https://www.youtube.com/watch?v=WY4rvU4ImgE&fbclid=IwAR091kWsEG3n0Hj1O_rDSvPkaeSmqLoE_ZF-wt8WO8kYue2K9BXDnQniYqo */

//Globale varibale som bliver brugt både i login, storeInformationLogIn og checklogin.
var userInput = document.getElementById('myUsername'); /*Henter data fra html brugernavn boks.*/
var passwo = document.getElementById('pwd'); /*Henter data fra html kodeord boks.*/
var getErrorMessage = document.getElementById('error_message');
var text;

class Costumer {
    constructor(firstName, password, Cart, Order, email) {
        this.firstName = firstName;
        this.password = password;
        this.Cart = Cart;
        this.Order = Order;
        this.email = email;
    }

    /*Opretter funktion til at logge ind med allerede oprettede brugere*/
    static login() {
        /*Når du logger ind tjekker den om brugernavn eksisterer og om password er korrekt.*/
            for (var i = 0; i < listCustomers.length; i++) {
            //Hvis brugernavnet(fornavnet) og kodeordet er defineret i listcostumers bliver man logget ind
            if (userInput.value == listCustomers[i].firstName && passwo.value == listCustomers[i].password) {
                //    alert("You have been logged in as " + userInput)
                console.log("Du er logget på som " + userInput);
                document.location.href='../../Service/Service.html';
                return;

            }
        }
        this.checkLogin();
    }

    //SNL: Funktion som skal gemme, hvilken user der er logget ind.
    /*SNL: Vi opretter et array som vi pusher vores objekt storeUser ind i. Herefter laver vi et for loop som looper gennem vores listCustomers array
    og tjekker om det der er logget ind er ens med en af de allerede oprettede brugere (firstname). Det samme gør vi med nye registrerede
    brugere (username). Hvis det findes skal den pushe informationen til vores tomme array storeLogIn og herefter skal det pushes til localstorage.*/
    static storeLogInInformation() {
        storeLogIn = [];
       //var test = document.getElementById('myUsername').value;

        var storeUser = {
            usernameLoggedin: document.getElementById('myUsername').value,
        };

        for(var i = 0; i< listCustomers.length; i++) {
            if(listCustomers[i].firstName == userInput.value) {
                storeLogIn.push(storeUser);
                localStorage.setItem('currentLoggedInUser', JSON.stringify(storeLogIn));
            }
        }
        return false;
    }

    //Skal tjekke om brugernavnet er tomt, om kodeordet er tomt eller om brugernavn/kodeord er forkert.
    static checkLogin() {
        getErrorMessage.style.padding = "10px"; //SNL: Stylingen på errorMessage som kommer til at være i toppen af login og registrer.
        //Vi skriver .value fordi det skal være den værdi der er skrevet i inputfeltet.
        if (userInput.value == "") {
            //alert("Enter username please")
            console.log("Skriv venligst dit brugernavn");
            text = "Skriv venligst dit brugernavn"
            getErrorMessage.innerHTML = text;
            return;
        }
        //SNL: Hvis boksen til kodeordet er tom skriver den enter password please.
        if (passwo.value == "") {
            console.log("Skriv venligst kodeordet");
            text = "Skriv venligst kodeordet"
            getErrorMessage.innerHTML = text;
            return;
        }
        console.log("Forkert kode eller brugernavn");
        text = "Forkert kode eller brugernavn";
        getErrorMessage.innerHTML = text;
        return;
    }
    /*SNL: Opretter en funktion til at oprette nye brugere*/
    static registerNewUser() {
        /*SNL: før oprettede vi nye objekter til at oprette en ny bruger, men vi bruger nu istedet vores klasse til dette, derfor hedder de nye oprettede
        brugere stadig firstname i localStorage.*/
        var username = document.getElementById('newUser').value;
        var pwd = document.getElementById('newPwd').value;
        var information = new Costumer(username, pwd, null, null, null);

        //SNL: Hvis funktionen validateUser returnerer en fejl vil der ikke blive oprettet en ny bruger.
        //SNL: Men er der ingen fejl vil den pushe vores information ind i vores tomme array listCustomers.
        //SNL: Disse bliver så sat i localStorage.
        if (this.validateUser() == false) {
            return;
        } else {
            listCustomers.push(information);
            localStorage.setItem('customerInformationList', JSON.stringify(listCustomers));
            alert("Du har nu oprettet en bruger");
            document.location.reload(true);

        }
    }
    //SNL: Funktion til at validere de forskellige inputfelter.
    static validateUser() {
        var registerNewUser = document.getElementById("newUser").value;
        var registerNewEmail = document.getElementById("newEmail").value;
        var registerNewPwd = document.getElementById('newPwd').value;
        var verifyNewPassword = document.getElementById('verifyNewPwd').value;

        getErrorMessage.style.padding = "10px"; //SNL: Stylingen på errorMessage som kommer til at være i toppen af login og registrer.

        //SNL: If statement som tjekker om feltet med brugernavn er tomt, hvis det er det skal den skrive en errormessage.
        if (registerNewUser == null || registerNewUser == "") {
            text = "Brugernavnet kan ikke være tomt, vælg venligst et";
            getErrorMessage.innerHTML = text;
            console.log(getErrorMessage.innerHTML)
            return false;
        }

        //SNL: Brugernavnet må ikke udelukkende bestå af mellemrum. Trim() er en metode der fjerner alle mellemrum.
        if (registerNewUser.trim() == "") {
            text = "Brugernavnet kan ikke udelukkende bestå af mellemrum."
            getErrorMessage.innerHTML = text;
            console.log(getErrorMessage.innerHTML)
            return false;
        }
        //SNL: for loop som hopper gennem vores array i toppen.
        //SNL: If statement, der tjekker om brugernavnet allerede findes i vores array. Hvis sand get errormessage.
        for (var i = 0; i < listCustomers.length; i++) {
            if (registerNewUser == listCustomers[i].firstName) {
                text = "Brugernavnet er desværre optaget";
                getErrorMessage.innerHTML = text;
                console.log(getErrorMessage.innerHTML);
                return false;
            }
        }
        // if statement that validates the typed in email
        // atpos < 1 (at least 1 character before @)
        // dotpos < atpos + 2 (must be characters between @ and .)
        // dotpos + 2 >= registerNewEmail.length (must be characters after . eg .com)
            //KR: https://github.com/mwndigi/exercise_7/blob/master/userRegistration.js

            var atAmount2 = registerNewEmail.valueOf("@");

            // Variable that collects the index number of @/at in the email
            var atpos = registerNewEmail.indexOf("@");
            // Variable that collects the index of the last ./dot in the email
            var dotpos = registerNewEmail.lastIndexOf(".");


            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= registerNewEmail.length) {
                text = "Tast venligst en gyldig email";
                getErrorMessage.innerHTML = text;
                console.log(getErrorMessage.innerHTML);
                console.log(registerNewEmail.valueOf());
                return false;
            }

        //SNL: If statement som tjekker længden på kodeordet. Hvis det er under 8 karakterer sender den errormessage.
        if (registerNewPwd.length < 8) {
            text = "Kodeordet skal være på minimum 8 karakterer";
            getErrorMessage.innerHTML = text;
            console.log(getErrorMessage.innerHTML)
            return false;
        }
        //SNL: If statement som tjekker om det kodeord der er skrevet i "Bekræft kodeord" er forskellig fra det der er skrevet i "Kodeord".
        //SNL: er de forskellige sender den en errormessage.
        if (registerNewPwd !== verifyNewPassword) {
            text = "Gentag venligst det samme kodeord som ovenover";
            getErrorMessage.innerHTML = text;
            console.log(getErrorMessage.innerHTML)
            return false;
        }
    }
}

/*SNL: Vi laver en variabel for alle costumers. Vi skal hente alt der ligger i localStorage i vores "boks" listcostumers costumerInformationList.
       JSON.parse() gør at den bliver hentet som et array */
var listCustomers = JSON.parse(localStorage.getItem('customerInformationList'));
console.log(listCustomers);

/*SNL: Det samme sker med vores currentLoggedInUser*/
var storeLogIn = JSON.parse(localStorage.getItem('currentLoggedInUser'));

/*SNL: Gør at errormessage bliver stående på siden og ikke forsvinder før man reloader.*/
addEventListener("submit", function(event){
    event.preventDefault();
});

/*SNL: Opretter en funktion til første gang der logges ind. If statement, som tjekker om listcostumers er tomt.
  Hvis den er det, skal den oprette et tomt array, hvor de faste brugere bliver pushet ind i.
  Vi blev nødt til at oprette denne funktion, da der inden blev oprettet dobbelt med brugere i localstorage hver gang man oprettede en ny bruger.*/
function firstAccess() {
    if (listCustomers == null) {
        listCustomers = [];
        //SNL: Opretter nye faste bruger som altid kan logge ind.
        listCustomers.push(new Costumer("Stine", "123456789", null, null, 'stine@email.dk'));
        listCustomers.push(new Costumer("Rama", "111111111", null, null, 'Rama@email.dk'));
        listCustomers.push(new Costumer("Jonathan", "999999999", null, null, 'jonathan@email.dk'));
        /*SNL: Vi opretter en "boks" i localstorage som hedder listcostumers som har "nøglen" til at komme ind i boksen - "customerInformationList"
         - herefter siger vi at alle costumers skal laves om fra et array til en string når de sendes til localstorage.*/
        localStorage.setItem('customerInformationList', JSON.stringify(listCustomers));
        console.log(listCustomers)
    }
}
//Kalder funktionen så den bliver brugt.
firstAccess();

//KR: Vi opretter en funktion som tjekker om typen af pwd er præcis typen password.
//KR: Hvis det er tilfældet skal typen laves om til tekst ellers skal typen blive ved med at være password.
function hidePwd() {
    var a = document.getElementById("pwd");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}




