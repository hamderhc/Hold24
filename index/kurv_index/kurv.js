function calculatePrice() {
    var inputEl = document.getElementById("antalTimer");
    var inputText = inputEl.value;
    var quantity = parseInt(inputText);

    // check for integer input
    if (isNaN(quantity)) {
        console.log("You must type an integer value for the quantity");
        return;
    }
    // check for positive integer
    if (quantity < 0) {
        console.log("You must type an positive integer value!")
        return;
    }
    // valid positive integer data
    var price = 120;
    var totalPris = quantity * price;
    //console.log("totalPrice", totalPrice)
    var outputEl = document.getElementById("totalPris");
    outputEl.innerText = totalPris;
}