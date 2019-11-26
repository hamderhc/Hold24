//Globale varibale som bliver brugt både i login og checklogin.
var userInput = document.getElementById('myUsername'); /*Henter data fra html brugernavn boks.*/
var passwo = document.getElementById('pwd'); /*Henter data fra html kodeord boks.*/
var getErrorMessage = document.getElementById('error_message');
var text;



class Costumer {
    constructor(firstName, password, cart, order, email) {
        this.firstName = firstName;
        this.password = password;
        this.cart = cart;
        this.order = order;
        this.email = email;
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
                document.location.href='../../festival/festival.html';
                return;
            }

            /*
            KR: Vi har prøvet at lave en "du har x antal forsøg tilbage" hvor den så til sidst gør, så man ikke kan skrive
            i felterne for brugernavn og kodeord eller trykke på log ind knappen, hvis man har brugt alle sine forsøg.
            Dog kan vi ikke få det til at fungere, da vi bruger en event.preventDefault(), så siden ikke bliver reloaded.
            Dermed tæller vores attemp variabel ikke ned, da den er forbundet til, når man trykker på knappen log ind.
            Vi har prøvet at flytte dette rundt, men det virker ikke...
            Hvis vi ville ordne det ville det nok kræve, at vi fjernede vores preventDefault og fandt på en anden løsning
            til vores problem med, at siden reloader og man derfor ikke kan se øverst oppe, hvad man har gjort forkert
            (forkert brugernavn, kodeord eller begge).


            var triesLeft = document.getElementById('triesLeft');
            var text2;


            // KR: Den følgende variable definerer antal loginforsøg.
            // https://www.formget.com/javascript-login-form/
            var attempt = 4;

            else {
                //KR: Hvis man skriver forkert brugernavn og/eller kodeord, vil der blive fjernet et loginforsøg.
                attempt--;
                if (attempt > 0) {
                    text2 = `Du har ${attempt} forsøg tilbage`;
                    triesLeft.innerHTML = text2;
                    return;
                }
                // Hvis man har 0 forsøg tilbage vil boksene forsvinde.
                if (attempt == 0) {
                    document.getElementById("brugernavn").disabled = true;
                    document.getElementById("kodeord").disabled = true;
                    document.getElementById("login").disabled = true;

                    text2 = 'Du har brugt alle dine forsøg, desvære';
                    triesLeft.innerHTML = text2;
                    return;
                }
            }

             */
        }
        this.checkLogin();
        this.storeLogInInformation();
    }

    static storeLogInInformation() {
        storeLogIn = [];
        var test = document.getElementById('myUsername').value;

        var storeUser = {
            usernameLoggedin: document.getElementById('myUsername').value,
           // productName: document
           // product
        };

        for(var i = 0; i< listCustomers.length; i++) {
            if(listCustomers[i].firstName == test || listCustomers[i].username == test) {
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
            email: document.getElementById('newEmail').value,
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
        var registerNewEmail = document.getElementById("newEmail").value;
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

        //KR: https://github.com/mwndigi/exercise_7/blob/master/userRegistration.js
        //var atAmount = registerNewEmail.includes("@");
        // Variable that collects the index number of @/at in the email
        var atpos = registerNewEmail.indexOf("@");
        // Variable that collects the index of the last ./dot in the email
        var dotpos = registerNewEmail.lastIndexOf(".");

        // if statement that validates the typed in email
        // atpos < 1 (at least 1 character before @)
        // dotpos < atpos + 2 (must be characters between @ and .)
        // dotpos + 2 >= registerNewEmail.length (must be characters after . eg .com)
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= registerNewEmail.length) {
            text = "Tast venligst en gyldig email ind";
            getErrorMessage.innerHTML = text;
            // console.log("Username cannot be empty, please choose one");
            console.log(getErrorMessage.innerHTML)
            return false;
            /*
            += "Den indtastede email skal være gyldig \n";
            = false;
             */
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

var storeLogIn = JSON.parse(localStorage.getItem('currentLoggedInUser'));

/*Gør at errormessage bliver stående på siden og ikke forsvinder før man reloader.*/
addEventListener("submit", function(event){
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




/* KR: Nu vil vi lave funktionen "hidePwd", der bliver aktiveret, når man trykker på checkboksen.
Dermed siger vi, at "if" kodeordets type er et 'password', så skal det laves om til typen 'text'. "else" vil kodeordet
laves om tilbage til typen "password".
Reference: https://www.geeksforgeeks.org/show-hide-password-using-javascript/

Første gang vi prøvede at tilføje denne, gav det os et problem. Når man trykkede på checkboksen, blev funktionen nedenfor
udført, men checkboksen blev ikke trykket ned. Først mistænkte vi, at det havde noget med scopet at gøre. Derfor flyttede
vi funktionen ind nederst i vores customer class. Dette fik checkboksen til at kunne blive trykket ned, men så virkede
funktionen ikke. Dette gav anledning til at tænke over, hvorfor dette var muligt. Vi mistænkte, at det havde noget at
gøre med eventlisteneren, da denne ikke ændre noget inde i scopet for vores class.

Defor kiggede vi nærmere på eventlisteneren og så dermed hurtigt, at den "lytter" efter typen "click" på daværende tidspunkt.
Ved at kigge hurtigt på HTML'en kunne vi se, at både vores checkboks og vores to "submit" knapper alle tre har en funktion,
der kører "onclick".

Derfor startede vi ud med at prøve på at ville lave en stopPropagation(). (Fortæl og analysér dette)

Efter lidt hurtigt code review fandt vi dog ud af, det ville spare kode, hvis vi bare fik eventlisteneren til at "lytte"
efter typen "submit" i stedet. På denne måde ville de to knappers default (reloade siden) stadig blive preventet, mens
det ikke ville gå ud over vores nye checkboks.

 */
function hidePwd() {
    var a = document.getElementById("pwd");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}


