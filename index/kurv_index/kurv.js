
var lineS = document.getElementsByClassName('lineStanders')
var lineS1 = document.getElementsByClassName('lineStanders1')
var lineS2 = document.getElementsByClassName('lineStanders2')
var lineS3 = document.getElementsByClassName('lineStanders3')

class chosenLinestander {
    constructor (name, location, price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }

    createHTML() {
        var addbutton = "<input type='button' class='addToStorage' name='add to storage' data-object='" + JSON.stringify(this) + "' value='Add to Storage' id='click'></input>";
    }


}



// calculate price function
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
