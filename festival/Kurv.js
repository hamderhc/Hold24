
// https://stackoverflow.com/questions/16293977/creating-a-shopping-cart-using-only-html-javascript

/* Dokumentation - JM
Hvad skal koden opnå?
    - Koden skal fungerer som et led mellem at få produkterne fra produktsiden til indkøbskurven, samt udregne
    den totale pris af timerne, som produktet skal bruges. Der mangler en mere optimeret løsning til at vælge
    antal timer for produktet.
Hvordan opnår koden dette?
    - Koden virker og kan gennem funktionen displayShoppingCart og AddToCart tilføje produkter til kurven.
    displayShoppingCart viser det, som er (tilføjet) i kurven, hvilket bliver tilføjet via. AddToCart funktionen,
    som overfører input(hhv. name, description og price) af de forskellige produkter.
Er koden et eksperiment eller en gennemført implementering?
    - Koden er indtil videre nok mere et eksperiment, da noget af den bør optimeres og tilrettes mere præcist, ligeledes
    bør den skrives rent.
Hvorfor har vi valgt at gøre det sådan?
    - Denne kode er inspireret af ovenstående koden, som findes i linket - Og den SKAL skrives om.
 */




//Laver et array til at holde på produkterne

var allProducts = []
var shoppingCart = [];

//Viser indholdet af shopping kurven

    //fill total cost of our shopping cart

class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    displayShoppingCart() {
        var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
        console.log(orderedProductsTblBody);
        //ensure we delete all previously added rows from ordered products table
        /* while (orderedProductsTblBody.rows.length > 0) {
             orderedProductsTblBody.deleteRow(0);
         }*/
        //variable til at den totale pris af shopping kurven
        /*
         var cartTotalPrice = 0;
        //iterate over array of objects

        for (var product in shoppingCart) {
            //Tilføj ny row

            var row = orderedProductsTblBody.insertRow();
            //Laver tre celler til produkt værdier

            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align = "right";



            // fylder cellerne med værdier fra det valgte produkt i arrayet

            cellName.innerHTML = shoppingCart[product].name;
            cellDescription.innerHTML = shoppingCart[product].description;
            cellPrice.innerHTML = shoppingCart[product].price;
            cartTotalPrice += shoppingCart[product].price;
            document.getElementById("cartTotal").innerHTML = cartTotalPrice;
        }

    }
/*    static AddtoCart(){
        for(i=0; i<allProducts.length; i++){
            if (clickedButtonID == allProducts[i].name){
                shoppingCart.push(allProducts[i]);
                this.displayShoppingCart();
            }
        }
    }*/

        removeAll()
        {
            document.getElementById("orderedProductsTblBody").innerHTML = "";
            document.getElementById("cartTotal").innerHTML = "";
            shoppingCart.splice(0, 99,);
        }
    }
}

function createObjects(){

    allProducts.push(new Product("Josef", "Århus", 120));
    allProducts.push(new Product("Oliver", "Copenhagen", 140));
    allProducts.push(new Product("Hanna", "Odense", 130));
    for(i=0; i < allProducts.length; i++){
        allProducts[i].displayShoppingCart();
    }
}
createObjects();
//var firstItem = new Cart("josef", "copenhagen", 120)

var clickedButtonID
var buttons = document.getElementsByClassName("buttons");

function AddtoCart(){
    console.log("error");
    console.log(allProducts);
    console.log(shoppingCart);
    console.log(clickedButtonID);
    for(i=0; i<allProducts.length; i++){
        if (clickedButtonID == allProducts[i].name){
            shoppingCart.push(allProducts[i]);

            console.log("The price is" + shoppingCart[i].price);
            alert("The price is " + shoppingCart[i].price);
           //allProducts[i].displayShoppingCart();

        }
    }
}

for(i=0; i < buttons.length; i++){
    console.log("hi");
    buttons[i].addEventListener("click", function(){
        clickedButtonID = this.id;
        console.log(clickedButtonID);
        AddtoCart();
    })
}

var josefBtn = document.getElementById('josefBtn');
var hannaBtn = document.getElementById('hannaBtn');
var oliverBtn = document.getElementById('oliverBtn');
//console.log(josefBtn)

