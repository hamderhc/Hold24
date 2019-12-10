class Cart {
    constructor(shoppingCart, cartTotalPrice) {
        this.shoppingCart = shoppingCart;
        this.cartTotalPrice = cartTotalPrice;
    }
}


// vi laver en funktion, som skal vise de valgte produkter i tabellen. (JM)
/* Denne funktion gør at de valgte produkter vises i tabellen. Det specificeres ved at variabel orderedProductsTblBody
lægger elementerne i Id'et "orderedProductsTblBody" i HTML (HCA)
 */
function showCart() {


    var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");

    // console.log(orderedProductsTblBody1);
    // Tester om der er mere end et produkt, ellers sletter den.
    while (orderedProductsTblBody.rows.length > 0) {
        orderedProductsTblBody.deleteRow(0);
    }


    //Variabel for prisen, som sættes til 0 (startpris). (JM)
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
        //var cellQuantity = row.insertCell(3);
        cellPrice.align = "right";


        // Produkternes værdier i arrayet shoppingCart hentes med innerHTML. (JM)
        /*Her bliver det bestemt hvad de celler der blev lavet skal indeholde. Det gøres med innerHTML, hvilket vil
        sige at værdierne hentes fra deres input i HTML. (!OBS formulering) (HCA)
         */
        cellName.innerHTML = shoppingCart[Product].name;
        cellLocation.innerHTML = shoppingCart[Product].location;
        cellPrice.innerHTML = shoppingCart[Product].price;
        //cellQuantity.innerHTML = shoppingCart[Product].quantity;
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

/*

//husk quantity objekt på product class

function newCartObject (){
    new Cart(shoppingCart, cartTotalPrice)
}

function final() {
    //document.getElementById('fuckingFinal').innerHTML = seFProduct;
    alert("Du har nu købt");
    let sum = 0;
    for (i = 0; i < shoppingCart.length; i++){
        sum += shoppingCart;
    }
    document.getElementById('freakingFinal').innerHTML = sum;
}

 */


// Skal linkes til CurentUser

/*
for(i=0; i < Costumer.storeLogInInformation(); i++){
    Costumer[i].Cart == newCartObject();
}*/


/*Save to localStorage
var shoppingCartString = JSON.stringify(shoppingCart[Product]);
localStorage.setItem(Cart, shoppingCartString);

var totalPriceString = JSON.stringify(cartTotalPrice);
localStorage.setItem(Cart, totalPriceString);
 */


/*
function confirmBtn() {
    var txt;
    if(confirm("Er du din ordre korrekt?")){
        txt = "Din ordre er bestilt!";
    } else {
        txt = "Din ordre er annuleret!";
    }
    document.getElementById("confirmTxt").innerText = txt;
}

 */


/*
Vi mangler at tilføje vores property, cartTotalPrice til localStorage for vores Cart-class. Mikkel kan måske hjælpe med dette?
Hvis ikke, reflekter over, hvad der går galt, hvorfor og hvad man kunne gøre af alternativer for at få det til at virke.
 */