function addToCart() {
    var button = event.target;
    var addProductToCart = button.parentElement;
    var title = addProductToCart.getElementsByClassName('title')[0].innerText;
    var price = addProductToCart.getElementsByClassName('price')[0].innerText;
    console.log(" title is "+ title + "price of this product is " + price);

}

function addItemToPage (title, price) {
    var cartRow = document.createElement('div');

}

function updateCartTotal() {

}