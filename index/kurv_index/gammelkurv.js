// skal slettes - bliver brugt i samme mappe som festival.html




//create array that will hold all ordered products
var shoppingCart = [];

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart(){
    var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    //ensure we delete all previously added rows from ordered products table
    while(orderedProductsTblBody.rows.length>0) {
        orderedProductsTblBody.deleteRow(0);
    }

    //variable to hold total price of shopping cart
    var cart_total_price=0;
    //iterate over array of objects
    for(var product in shoppingCart){
        //add new row
        var row=orderedProductsTblBody.insertRow();
        //create three cells for product properties
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align="right";
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price+=shoppingCart[product].Price;
    }
    //fill total cost of our shopping cart
    document.getElementById("cart_total").innerHTML=cart_total_price;
}


function AddtoCart(name,description,price){
    //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name=name;
    singleProduct.Description=description;
    singleProduct.Price=price;
    //Add newly created product to our shopping cart
    shoppingCart.push(singleProduct);
    //call display function to show on screen
    displayShoppingCart();

}


//Add some products to our shopping cart via code or you can create a button with onclick event

//AddtoCart("josef","Århus",120);
function removeAll(){
    document.getElementById("orderedProductsTblBody").innerHTML = "";
    document.getElementById("cart_total").innerHTML = "";
}




/*

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

/*
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
