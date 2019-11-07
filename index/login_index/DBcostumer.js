class Costumer {
    constructor(firstName, password) {
        this.firstName = firstName;
        this.password = password;
    }
    /*Opretter funktion til at logge ind med allerede oprettede brugere*/
    static login() {
        var userInput = document.getElementById('myUsername').value; /*Henter data fra html brugernavn boks.*/
        var passwo = document.getElementById('pwd').value; /*Henter data fra html kodeord boks.*/

        /*Når du logger ind tjekker den om brugernavn eksisterer og om password er korrekt.*/
        for (var i = 0; i < listCustomers.length; i++) {
            /*Hvis brugernavnet(fornavnet) og kodeordet er defineret i listcostumers bliver man logget ind. */
            if (userInput == listCustomers[i].username && passwo == listCustomers[i].pwd) {
                //    alert("You have been logged in as " + userInput)
                console.log("Du er logget på som " + userInput);
                window.open('../index.html'); //Når du er logget ind sendes du videre til forsiden.
                return;
            }

            /*SNL: jeg forstår ikke helt hvorfor dette if statement skal være der, men valideringerne virker ikke uden*/
            if (userInput == "") {
                //alert("Enter username please")
                console.log("Skriv venligst dit brugernavn");
                return;
            }

            //Hvis boksen til kodeordet er tom skriver den enter password please.
            if (passwo == "") {
                //alert("Enter password please")
                console.log("Skriv venligst kodeordet");
                return;
            }
        }
        console.log("Forkert kode eller brugernavn");
        return;
    }

    /*Opretter en funktion til at oprette nye brugere*/
    static registerNewUser() {
        /*Opretter variable til boksene i html*/
        // var registerNewUser = document.getElementById('newUser').value;
        var information = {
            username: document.getElementById('newUser').value,
            pwd: document.getElementById('newPwd').value,
            verifyPwd: document.getElementById('verifyNewPwd').value
        };

        //Hvis funktionen validateUser returnerer en fejl vil der ikke blive oprettet en ny bruger.
        //Men er der ingen fejl vil den pushe vores information ind i vores tomme array øverst.
        //Objekterne i det tomme array
        if (this.validateUser() == false) {
            return;
        } else {
            listCustomers.push(information);
            localStorage.setItem('customerInformationList', JSON.stringify(listCustomers));
            alert("Du har nu oprettet en bruger");
        }
    }

//SNL: Funktion til at validere de forskellige felter.
    static validateUser() {
        var registerNewUser = document.getElementById("newUser").value;
        var registerNewPwd = document.getElementById('newPwd').value;
        var verifyNewPassword = document.getElementById('verifyNewPwd').value;
        var getErrorMessage = document.getElementById('error_message');
        var text;

        getErrorMessage.style.padding = "10px"; //SNL: Stylingen på errorMessage som kommer til at være i toppen af login og registrer.

        //SNL: If statement som tjekker om feltet med brugernavn er tomt, hvis det er det skal den skrive en errormessage.
        if (registerNewUser == null || registerNewUser == "") {
            text = "Brugernavnet kan ikke være tomt, vælg venligst et";
            getErrorMessage.innerHTML = text;
            // console.log("Username cannot be empty, please choose one");
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
        //SNL: If statement som tjekker længden på kodeordet. Hvis det er under eller lig 8 karakterer sender den errormessage.
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

//Opretter tomt array. Og siger at den skal get item eller smide objektet ind i det tomme array.
var listCustomers = JSON.parse(localStorage.getItem('customerInformationList')) || [];

//Forsøg på at lave et nyt array til nye oprettede brugere.
var registeredCostumers = JSON.parse(localStorage.getItem('newCostumerInformationList')) || [];

/*Gør at errormessage bliver stående på siden og ikke forsvinder før man reloader.*/
addEventListener("click", function(event){
    event.preventDefault();
});

//Opretter faste bruger som altid kan logge ind.
listCustomers.push(new Costumer("Stine", "123456789"));
listCustomers.push(new Costumer("Rama", "111111111"));
listCustomers.push(new Costumer("Jonathan", "999999999"));

