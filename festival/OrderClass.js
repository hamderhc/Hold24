class Order {
    constructor(cart, email) {
        this.cart = cart;
        this.email = email;
    }

}

// Variable that collects the index number of @/at in the email
var atpos=email.indexOf("@");
// Variable that collects the index of the last ./dot in the email
var dotpos=email.lastIndexOf(".");
​
// if statement that validates the typed in email
// atpos<1 (at least 1 character before @) dotpos<atpos+2 (must be characters between @ and .)
// dotpos+2>=email.length (must be characters after . eg .com)
if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    alertMessage += "Den indtastede email skal være gyldig \n";
    alertBoolean = false;
}