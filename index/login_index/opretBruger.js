//Tomt array, JSON.parse gør at den ikke overskriver når man laver en ny bruger igen eller reloader siden.
var users = JSON.parse(localStorage.getItem('userInfo')) || [];

//Dette er en metode
const addInfo = (ev)=> {
    ev.preventDefault();

//Ny variabel som henter værdierne fra vores HTML.
    let userObj = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    password: document.getElementById('pwd').value,
    password2: document.getElementById('pwd2').value
    }

    users.push(userObj);//"skubber" vores objekt værdier ind i vores tomme array
    document.querySelector('form').reset(); // nulstiller formen, så den næste bruger kan benytte det

    localStorage.setItem('userInfo',JSON.stringify(users)); //??Laver object eller value til en JSON string og sætter dette ind på en værdi.

    let test = localStorage.getItem('userInfo'); //Bare en test om det fungerer
    console.log(test);

    var form_valid = true;
    var validation_message = "";

//Valider Fornavn
    if(fname=="") {
        validation_message += "Udfyld fornavn.";
        form_valid = false;
    }

//Valider efternavn
    if(lname=="") {
        validation_message += "Udfyld efternavn.";
        form_valid = false;
    }

//Valider email
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        validation_message += "Please put in a valid email-adress";
        form_valid = false;
    }

//Valider kodeord
    if(pwd=="") {
        validation_message += "Opret et password";
        form_valid = false;
    }

//Valider kodeord2
    if(pwd2=="" || pwd2!=pwd) {
        validation_message += "Tjek om password er ens";
        form_valid = false;
    }

    if(form_valid == false) {
        alert(validation_message);
    }else{
        alert("Hej " + fname + lname
            + "\nEmail: " + email);
    }
    }

//Fortæller knappen at den skal bruge vores metode når man trykker på den.
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click',addInfo);
});


