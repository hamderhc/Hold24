/*
let inputJ = document.getElementById('qJosef');
let quantityJosef = inputJ.value; */
class Product {
    constructor(name, location, price, quantity) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.quantity = quantity;
    }
}

if (localStorage.getItem('Product') == null) {
    var ProductLS = [];
    ProductLS.push(new Product('', '', '', ''));

    var ProductLSstring = JSON.stringify(ProductLS);
    localStorage.setItem('Product', ProductLSstring);
}

let ProductLSParsed = JSON.parse(localStorage.getItem('Product'));

let inputJosef = document.getElementById('Josef');
let inputHanna = document.getElementById('Hanna');
let inputOliver = document.getElementById('Oliver');


function addJosef() {
    var Josef = inputJosef.value;
    var JosefAmount = Josef * 120;

    ProductLSParsed.push(new Product('Josef', 'Århus', JosefAmount, Josef));

    var JosefLSstring = JSON.stringify(ProductLSParsed);
    localStorage.setItem('Product', JosefLSstring);

    var seProduct = JSON.parse(localStorage.getItem('Product'));
    console.log(seProduct);
}

function addHanna() {
    var Hanna = inputHanna.value;
    var HannaAmount = Hanna * 130;

    ProductLSParsed.push(new Product('Hanna', 'Odense', HannaAmount, Hanna));

    var HannaLSstring = JSON.stringify(ProductLSParsed);
    localStorage.setItem('Product', HannaLSstring);

    var seProduct = JSON.parse(localStorage.getItem('Product'));
    console.log(seProduct);
}

function addOliver() {
    var Oliver = inputOliver.value;
    var OliverAmount = Oliver * 140;

    ProductLSParsed.push(new Product('Oliver', 'København', OliverAmount, Oliver));

    var OliverLSstring = JSON.stringify(ProductLSParsed);
    localStorage.setItem('Product', OliverLSstring);

    var seProduct = JSON.parse(localStorage.getItem('Product'));
    console.log(seProduct);
}




// Øvelse 15.1 i bogen viser buildTable funktionen
function buildTable(data) {
    let table = document.createElement("table");

    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number") {
                cell.style.textAlign = "left";
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}
//implementering af øvelse 15.1 ovenfor
document.querySelector("#orderedProductsTblBody")
    .appendChild(buildTable(ProductLSParsed));




