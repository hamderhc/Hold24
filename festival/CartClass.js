
class Cart {
    constructor(allProducts, totalPrice){
        this.allProducts = allProducts;
        this.totalPrice = totalPrice;
    }
}

//husk quantity objekt på product class




function newCartObject (){
    new Cart(allProducts, cartTotalPrice)
}

// Skal linkes til CurentUser

}

/*
for(i=0; i < Costumer.storeLogInInformation(); i++){
    Costumer[i].Cart == newCartObject();
}*/


//Save to localStorage
var shoppingCartString = JSON.stringify(shoppingCart[Product]);
localStorage.setItem(Cart, shoppingCartString);

var totalPriceString = JSON.stringify(cartTotalPrice);
localStorage.setItem(Cart, totalPriceString);

