class Order {
    constructor(Cart, orderTotalPrice, currentLoggedInUser) {
        this.Cart = Cart; //array med alle produktene kunden har bestilt
        this.orderTotalPrice = orderTotalPrice;
        this.currentLoggedInUser = currentLoggedInUser;
    }
}

var orderHistory = [];



//checkCurrentUser();

let cIL = JSON.parse(localStorage.getItem("customerInformationList"));
let cLIU = JSON.parse(localStorage.getItem("currentLoggedInUser"));

/*
if(cIL[cLIU].Order == null){
    orderHistory = [];
} else {
    orderHistory = cIL[cLIU].Order
}

 */






/*
KR: For at få fat i værdien af det bestillede:

var cartTotal = document.getElementById('cartTotal')
cartTotal.value

 */






// Skal loope gennem Costumer list - matche current user - derefter køre et costumer[i].Cart ... loop.
// Herefter er der lavet en confirm order button.


function order() {

    //if(currentLoggedInUser[0].usernameLoggedin == brugernavnTjek.value){
    let txt;
    if(confirm("Er du sikker på din ordrer er korrekt?")) {
        for (i = 0; i < cIL.length; i++) {
            if (cIL[i].firstName == cLIU[0].usernameLoggedin) {

                console.log(cIL[i].Cart);
                orderHistory.push(cIL[i].Cart);
                console.log(orderHistory);
                cIL[i].Order = orderHistory;
                localStorage.setItem('customerInformationList', JSON.stringify(cIL));
                finalOrderHistory();
            }
            txt = "Din ordre er nu bestilt";
        }
    }
        else {
            txt = "Din ordre gik ikke igennem";
            document.getElementById('confirmtxt').innerHTML = txt;
    }


    /*alert("Tak for din bestilling. Din bestilling er nu gemt.");
        orderHistory.push(new order (customerInformationList[currentUser].cart, null, customerInformationList[currentUser]));
        console.log(orderHistory);
        console.log(shoppingCart);
        customerInformationList[currentUser].order = orderHistory;
        localStorage.setItem('order', JSON.stringify(customerInformationList[currentUser].order));
        //document.location.reload(true);
    //KR: Reload siden bagefter (mest af alt så den eventuelle fejlmeddelelse nedenfor bliver slettet.
    //document.location.reload(true);


}
    else{
        document.getElementById ('sorry').innerHTML = "Forkert brugernavn. Prøv igen"
}

         */
}

function finalOrderHistory() {

    // localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    let orderLSParsed = JSON.parse(localStorage.getItem('order'));
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
    document.querySelector("#freakingFinal")
        .appendChild(buildTable(cIL.Order));




}