// Vi opretter klassen Cart med constructer shoppingcCart og CartTotalPrice.
class Cart {
    constructor(shoppingCart, cartTotalPrice) {
        this.shoppingCart = shoppingCart;
        this.cartTotalPrice = cartTotalPrice;
    }
}


// Vi genbruger metoden fra Product Class, herunder displayShoppingCart.
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


        // Produkternes værdier i arrayet shoppingCart bliver sat ind i HTML med innerHTML på produktet i Shoppingcart.
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

