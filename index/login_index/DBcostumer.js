//Globale varibale som bliver brugt både i login og checklogin.
var userInput = document.getElementById('myUsername'); /*Henter data fra html brugernavn boks.*/
var passwo = document.getElementById('pwd'); /*Henter data fra html kodeord boks.*/
var getErrorMessage = document.getElementById('error_message');
var text;



class Costumer {
    constructor(firstName, password, cart, order) {
        this.firstName = firstName;
        this.password = password;
        this.cart = cart;
        this.order = order;
    }

    /*Opretter funktion til at logge ind med allerede oprettede brugere*/
    static login() {
       // var userInput = document.getElementById('myUsername').value; /*Henter data fra html brugernavn boks.*/
       // var passwo = document.getElementById('pwd').value; /*Henter data fra html kodeord boks.*/

        /*Når du logger ind tjekker den om brugernavn eksisterer og om password er korrekt.*/
        for (var i = 0; i < listCustomers.length; i++) {
            /*Hvis brugernavnet(fornavnet) og kodeordet er defineret i listcostumers bliver man logget ind.
            Eller hvis de faste objekter vi opretter nederst er i listcostumers bliver disse logget ind.*/
            if (userInput.value == listCustomers[i].username && passwo.value == listCustomers[i].pwd || userInput.value == listCustomers[i].firstName && passwo.value == listCustomers[i].password) {
                //    alert("You have been logged in as " + userInput)
                console.log("Du er logget på som " + userInput);
                window.open('../index.html'); //Når du er logget ind sendes du videre til forsiden.
                return;
            }
        }
        this.checkLogin();
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
        //Hvis boksen til kodeordet er tom skriver den enter password please.
        if (passwo.value == "") {
            //alert("Enter password please")
            console.log("Skriv venligst kodeordet");
            text = "Skriv venligst kodeordet"
            getErrorMessage.innerHTML = text;
            return;
        }
        console.log("Forkert kode eller brugernavn");
        text = "Forkert kode eller brugernavn"
        getErrorMessage.innerHTML = text;
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
        //var getErrorMessage = document.getElementById('error_message');
        //var text;

        getErrorMessage.style.padding = "10px"; //SNL: Stylingen på errorMessage som kommer til at være i toppen af login og registrer.

        //SNL: If statement som tjekker om feltet med brugernavn er tomt, hvis det er det skal den skrive en errormessage.
        if (registerNewUser == null || registerNewUser == "") {
            text = "Brugernavnet kan ikke være tomt, vælg venligst et";
            getErrorMessage.innerHTML = text;
            // console.log("Username cannot be empty, please choose one");
            console.log(getErrorMessage.innerHTML)
            return false;
        }
        //SNL: Brugernavnet må ikke udelukkende bestå af mellemrum. Trim() betyder
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

/*SNL: Vi laver en variabel for alle costumers. Vi skal hente alt der ligger i localStorage i vores "boks" listcostumers costumerInformationList.
       Jason Parse gør at den bliver hentet som et array */
var listCustomers = JSON.parse(localStorage.getItem('customerInformationList'));
//var listCustomers = JSON.parse(localStorage.getItem('customerInformationList')) || [];
console.log(listCustomers);





/*Gør at errormessage bliver stående på siden og ikke forsvinder før man reloader.*/
addEventListener("click", function(event){
    event.preventDefault();
});

/*Opretter en funktion til første gang der logges ind. If statement, som tjekker om listcostumers er tomt.
  Hvis den er det, skal den lave den til et tomt array, hvor de faste brugere bliver pushet ind i.*/
function firstAccess(){
    if(listCustomers == null){
        listCustomers = []
        //Opretter nye faste bruger som altid kan logge ind.
        listCustomers.push(new Costumer("Stine", "123456789"));
        listCustomers.push(new Costumer("Rama", "111111111"));
        listCustomers.push(new Costumer("Jonathan", "999999999"));
        /*Vi opretter en "boks" i localstorage som hedder listcostumers som har "nøglen" til at komme ind i boksen - "customerInformationList"
         - herefter siger vi at alle costumers skal laves om fra et array til en string når de sendes til localstorage.*/
        localStorage.setItem('customerInformationList', JSON.stringify(listCustomers))
        console.log(listCustomers)
    }
}
//Kalder funktionen så den bliver brugt.
firstAccess();


/* KR: Nu vil vi lave funktionen "gemKodeord", der bliver aktiveret, når man trykker på checkboksen.
Dermed siger vi, at "if" kodeordets type er et 'password', så skal det laves om til typen 'text'. "else" vil kodeordet
laves om tilbage til typen "password".
Reference: https://www.geeksforgeeks.org/show-hide-password-using-javascript/
 */
function gemKodeord() {
    var a = document.getElementById("pwd");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}


