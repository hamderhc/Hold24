class order {
    constructor(Cart, price, currentUser) {
        this.cart = cart; //arraylist med alle produktene kunden har bestillt
        this.price = price;
        this.currentUser = currentLoggedInUser
    }
}

var orderHisory = [];

checkCurrentUser();

if(customerInformationList[currentUser].order == null){
    orderHisory = [];
} else {
    shoppingCart = customerInformationList[currentUser].order
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