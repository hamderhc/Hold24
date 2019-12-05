
class Cart extends Product {
    constructor(name, location, price, shoppingCart, cartTotalPrice) {
        super(name, location, price);
        this.shoppingCart = shoppingCart;
        this.cartTotalPrice = cartTotalPrice;
    }
    get displayShoppingCart();
}

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



function confirmBtn() {
    var txt;
    if(confirm("Er du din ordre korrekt?")){
        txt = "Din ordre er bestilt!";
    } else {
        txt = "Din ordre er annuleret!";
    }
    document.getElementById("confirmTxt").innerText = txt;
}





/*
Vi mangler at tilføje vores property, cartTotalPrice til localStorage for vores Cart-class. Mikkel kan måske hjælpe med dette?
Hvis ikke, reflekter over, hvad der går galt, hvorfor og hvad man kunne gøre af alternativer for at få det til at virke.
 */