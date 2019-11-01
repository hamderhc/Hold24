

var lineS = document.getElementsByClassName('lineStanders')
var lineS1 = document.getElementsByClassName('lineStanders1')
var lineS2 = document.getElementsByClassName('lineStanders2')
var lineS3 = document.getElementsByClassName('lineStanders3')

class ChosenLinestander {
    constructor (name, location, price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }
/*
    createHTML() {
        var addButton = "<input type='button' class='lineStanders' name='add to storage' data-object='"
            + JSON.stringify(this) + "' value='Add to Storage' id='click'> </input>";
        return ChosenLinestander + this.name + ChosenLinestander + this.location + ChosenLinestander + this.price + ChosenLinestander + addButton;
    }
 */

}

var list = [];
list.push(new ChosenLinestander("camilla","Odense", "120kr"));
list.push(new ChosenLinestander("josefine","Århus", "120kr"));
list.push(new ChosenLinestander("hanna","Roskilde", "120kr"));
list.push(new ChosenLinestander("Anna","København", "120kr"));

var html= "";

for(i=0; i < list.length; i++ ){
    html += list[i].createHTML();
}
lineS[0].innerHTML = html;
lineS1[0].innerHTML = html;
lineS2[0].innerHTML = html;
lineS3[0].innerHTML = html;

var linestander;
if (localStorage.getItem('linestander') == null) {
    linestander = list
    localStorage.setItem("linestander", JSON.stringify(linestander))
} else {
    linestander = JSON.parse(localStorage.getItem('linestander'))
}





// Udregn pris
function calculatePrice() {
    var inputEl = document.getElementById("antalTimer");
    var inputText = inputEl.value;
    var quantity = parseInt(inputText);

    // Check efter integer input
    if (isNaN(quantity)) {
        console.log("Du skal indtaste et tal, som beskriver antal timer");
        return;
    }
    // Check efter positivt integer input
    if (quantity < 0) {
        console.log("Det indtastede skal være positivt")
        return;
    }
    // Valider positivt integer input
    var price = 120;
    var totalPris = quantity * price;
    //console.log("totalPrice", totalPrice)
    var outputEl = document.getElementById("totalPris");
    outputEl.innerText = totalPris;
}
