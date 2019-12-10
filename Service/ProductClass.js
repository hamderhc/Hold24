
//Vi laver et tomt array til at holde alle produkterne (JM)
//Variabel allProducts er et tomt array som skal indeholde alle produkterne (HCA)

var allProducts = [];


//Vi laver et tomt array til at holde på de produkter, som skal i kurven (JM)
// Variabel shoppingCart er et tomt array som  skal indeholde alle de valgte produkter i en indkøbskurv (HCA)

var shoppingCart = [];


//Denne variabel har vi oprettet til at bestemme den totale pris. Vi har placeret den udenfor scopet,
// da vi skal kalde den senere, når vi skal oprette et new Cart objekt.
var cartTotalPrice;

//Vi deklarerer currentUser til at være en tom string.
var currentUser = "";
//Vi henter customerInformationList ned fra localStorage i en variabel, 'customerInformationList'.
var customerInformationList = JSON.parse(localStorage.getItem("customerInformationList"));
//Vi tester for at se om vi kan finde 'firstName' for den 0. værdi af customerInformationList.
console.log(customerInformationList[0].firstName);
//Vi henter også currentLoggedInUser ned fra localStorage i en variabel, 'currentLoggedInUser'.
var currentLoggedInUser = JSON.parse(localStorage.getItem("currentLoggedInUser"));

//funktion checkCurrentUser oprettes til at loope igennem længden af costumerInformationList og finder,
// hvor firstname er det samme for customerInformationList og currentLoggedInUser.
// Når dette sker bliver currentUser til indekset.
function checkCurrentUser() {
    for (i = 0; i < customerInformationList.length; i++) {
        if (customerInformationList[i].firstName == currentLoggedInUser[0].usernameLoggedin) {
            currentUser = i
        }
    }
}
// Her kaldes funktionen.
checkCurrentUser();

//her testes det om currentUser indeholder nummeret i arrayet for den person, som er logget ind.
console.log(currentUser);

// Hvis den nuværende brugers 'Cart' er tom (null), vil shoppingCart arrayet også være tomt,
// hvis ikke vil shoppingCart være det samme som det der allerede er i den nuværende brugers Cart.
if (customerInformationList[currentUser].Cart == null) {
    shoppingCart = [];
} else {
    shoppingCart = customerInformationList[currentUser].Cart;
}

//Vi laver en klasse, som indeholder attributterne navn, lokation, og pris for alle produkterne. (JM)
/* Der laves så en klasse som indeholder forskellige objekter af samme type. Disse objekter er attributter,
da de referer til HTML elementer. Klassen indeholder attributterne: navn, lokation og pris for alle produkterne - specificeret
i HTML (HCA)*/

class Product {
    constructor(name, location, price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }

// vi laver en funktion, som skal vise de valgte produkter i tabellen. (JM)
    /* Denne funktion gør at de valgte produkter vises i tabellen. Det specificeres ved at variabel orderedProductsTblBody
    lægger elementerne i Id'et "orderedProductsTblBody" i HTML (HCA)
     */
    displayShoppingCart() {
        var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
        console.log(orderedProductsTblBody);
        // Tester om der er mere end et produkt, ellers sletter den. Den sørger for at den ikke vokser eksponentielt.
        // Hver gang man tilføjer en row, så den ikke  vokser mere en 1 pr. tryk.
        while (orderedProductsTblBody.rows.length > 0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //Variabel hentes fra det globale scope for prisen, som sættes til 0 (startpris). (JM)
        //Variabel som sætter startprisen til 0 (HCA)

        cartTotalPrice = 0;

        //Vi laver et loop, som indsætter de forskellige værdier for produkterne (JM)
        /*Dette for loop henter værdierne fra klassen Product og indsætter dem i shoppingCart, som var det array, der
        blev lavet tidligere. Det gør den ved at tilføje en ny tr (tablerow) i den specificerede tablebody. (HCA)
         */

        for (var Product in shoppingCart) {

            //Vi laver en variabel, som tilføjer en ny række i HTML dokumentet og laver en ny tr række. (JM)

            var row = orderedProductsTblBody.insertRow();
            /*Vi laver tre celler til hver af produkternes værdier, hvor den
            vha. insertCell indsætter en ny celle i tabellen for produkternes værdier. (JM)
             */
            //Der laves 3 celler i den indsatte række, 1 til hver af attributterne. (HCA)
            var cellName = row.insertCell(0);
            var cellLocation = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align = "right";


            // Produkternes værdier i arrayet shoppingCart bliver sat ind i HTML med innerHTML på produktet i Shoppingcart. (JM)
            /*Her bliver det bestemt hvad de celler der blev lavet skal indeholde. Det gøres med innerHTML, hvilket vil
            sige at værdierne hentes fra deres input i HTML. (!OBS formulering) (HCA)
             */
            cellName.innerHTML = shoppingCart[Product].name;
            cellLocation.innerHTML = shoppingCart[Product].location;
            cellPrice.innerHTML = shoppingCart[Product].price;

            /* Den totale pris udregnes ved at variablen cartTotalPrice,
            som er nul får prisen for de produkter, som er i shoppingCart lagt oveni (JM)
             */
            /*Her bliver den totale pris udregnet, ved at variablen cartTotalPrice bliver tillagt en værdi. Denne værdi
            findes i shoppingCart arrayet - mere præcist den specificerede attribut, i dette tilfælde attributten price.
            Denne attributs værdi hentes med innerHTML. (HCA)
             */
            cartTotalPrice += shoppingCart[Product].price;
            document.getElementById("cartTotal").innerHTML = cartTotalPrice;
        }
    }
}


// en funktion til at slette alt, men sletter ikke arrayet - kun det visuelle. (JM)
/*
Denne funktion skal slette alt der er blevet lagt i kurven. Den sætter indholdet i de 2 valgte elemtenter til blankt.
splice metoden sletter indholdet i shoppingCart arrayet. Den sletter dog ikke indholdet i console. (HCA)
 */
function removeAll() {
    document.getElementById("orderedProductsTblBody").innerHTML = "";
    document.getElementById("cartTotal").innerHTML = "";
    customerInformationList[currentUser].Cart.splice(0, 99);
}

// Produkterne oprettes og skubbes ind i et array. (JM)
// Her bliver produkterne oprettet og skubbet ind i det tomme array allProducts (HCA)
function createObjects() {

    allProducts.push(new Product("Josef", "Århus", 120));
    allProducts.push(new Product("Oliver", "København", 140));
    allProducts.push(new Product("Hanna", "Odense", 130));
    for (i = 0; i < allProducts.length; i++) {
        allProducts[i].displayShoppingCart();
    }
}
createObjects();

/*
I nedenstående bliver der først oprettet en tom variabel "clickedButtonID". Der laves så en variabel som kalder på alle
produkterne ud fra deres knap. Så køres et for loop gennem alle produkterne hvor den ved this.id finder det produkt der
bliver spurgt efter. Herefter bliver den tomme variabel "clickedButtonID" tilføjet this.id værdien. Til sidst sendes
produktet videre til AddtoCart funktionen, hvori der køre et for loop gennem alle produkterne. Den finder så det produkt
der har et matchende ID med "clickedButtonID". Når produktet er fundet sendes dette til det tomme array shoppingCart (HCA)
 */

//der oprettes en tom variabel, som bruges til at klassificere det valgte produkt (pr. id) (JM)
var clickedButtonID;

// der oprettes en variabel, som kalder alle produkterne pr. knap. (JM)
var buttons = document.getElementsByClassName("buttons");

/* Gennem et 'for' loop kører den igennem alle produkterne, hvor den gennem 'this.id' henter det specifikke produkts ID,
 herefter sendes produktet til AddtoCart funktionen (JM) */
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        clickedButtonID = this.id;
        console.log(clickedButtonID);
        AddtoCart();
    })
}


/* der loopes gennem alle produkterne, og den tager det produkt, som er lig med det id, som man har trykket på, hvorefter
det valgte produkt pushes ind i det tomme 'shoppingCart' array. (JM) */
function AddtoCart() {

    // Vi console.log vores forskellige variabler for at teste om de kan kaldes indenfor scopet.
    console.log(allProducts);
    console.log(shoppingCart);
    console.log(clickedButtonID);

    for (i = 0; i < allProducts.length; i++) {
        if (clickedButtonID == allProducts[i].name) {
            shoppingCart.push(allProducts[i]);

            allProducts[i].displayShoppingCart();

            // Vi sætter den nuværende brugers Cart til at være det samme som shoppingCart arrayet.
            // Herefter bliver det lagt op i localStorage.
            customerInformationList[currentUser].Cart = shoppingCart;
            localStorage.setItem("customerInformationList", JSON.stringify(customerInformationList));
        }
    }

}

