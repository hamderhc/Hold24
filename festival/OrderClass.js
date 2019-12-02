class Order {
    constructor(Cart, pris, currentUser) {
        this.cart = cart; //arraylist med alle produktene kunden har bestillt
        this.pris = pris;
        this.currentUser = currentLoggedInUser
    }
}

var orderHisory = [];

checkCurrentUser();

if(customerInformationList[currentUser].Order == null){
    orderHisory = [];
} else {
    shoppingCart = customerInformationList[currentUser].Order
}

function finalOrderHistory() {
    for(i=0; i<allProducts.length; i++){
        if (clickedButtonID == allProducts[i].name){
            shoppingCart.push(allProducts[i]);

            //console.log("The price is " + shoppingCart[i].price);

            allProducts[i].displayShoppingCart();
            customerInformationList[currentUser].cart = shoppingCart;
            localStorage.setItem("customerInformationList", JSON.stringify(customerInformationList));

            // localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))

        }
    }

}

/*
KR: For at få fat i værdien af det bestillede:

var cartTotal = document.getElementById('cartTotal')
cartTotal.value

 */






// Skal loope gennem Costumer list - matche current user - derefter kører et costumer[i].Cart ... loop.
// Herefter er der lavet en confirm order button.