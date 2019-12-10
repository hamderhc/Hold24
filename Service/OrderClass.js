// Vi opretter en klasse med constructoren
class Order {
    constructor(Cart, Price) {
        this.Cart = Cart;
        this.Price = Price;
    }
}

//Vi laver et tomt array til at holde ordrehistorikken.
var orderHistory = [];

//Vi gør det samme som under ProductClass.js, nemlig at hente customerInformationList ned fra localStorage i en variabel, 'cIL'.
let cIL = JSON.parse(localStorage.getItem("customerInformationList"));
//Vi henter currentLoggedInUser ned fra localStorage i en variabel, 'cLIU'.
let cLIU = JSON.parse(localStorage.getItem("currentLoggedInUser"));

//Vi kalder funktionen 'checkCurrentUser()' og console.log'er currentUser for at teste, om 'checkCurrentUser()' kan blive kaldt i dette dokument.
checkCurrentUser();
console.log(currentUser);

//Vi tjekker herefter, om Order for den nuværende bruger kan hentes i dette dokument også.
console.log(cIL[currentUser].Order);

// Vi bruger samme fremgangsmåde som i ProductClass.js. Hvis den nuværende brugers 'Order' er tom (null), vil orderHistory-arrayet også være tomt.
// Hvis ikke vil orderHistory være det samme som det der allerede er i den nuværende brugers Order.
if (cIL[currentUser].Order == null) {
    orderHistory = [];
} else {
    orderHistory = cIL[currentUser].Order;
}

// Vi laver nu en funktion, der bliver kaldt 'onclick' i HTML'en.
// Der skabes et for-loop inde i denne funktion, som loop'er igennem customerInformationList i localStorage og finder, hvor 'firstName' for en af brugerne under customerInformationList
// er det samme som 'firstName' for den nuværende bruger.

function order() {

    //KR: for-loop der sætter den nuværende brugers brugernavn lig med en bruger i vores fulde brugerliste.
    //Hvis det er tilfældet, vil først push'e Cart-klassen ind i et.
    for (i = 0; i < cIL.length; i++) {
        if (cIL[i].firstName == cLIU[0].usernameLoggedin) {

            // Vi tester, om den nuværende brugers Cart kan kaldes inde i loop'et.
            console.log(cIL[i].Cart);
            // Nu push'er vi cIL[i].Cart ind i orderHistory-array'et.
            orderHistory.push(cIL[i].Cart);
            // Vi tester om, Cart for den nuværende bruger rent faktisk er blevet push'et ind i array'et.
            console.log(orderHistory);
            // Nu sætter vi cIL[i].Order til at være det samme som orderHistory-array'et.
            cIL[i].Order = orderHistory;
            // Her stringify'er vi cIL ved hjælp af JSON og set'er det i localStorage under 'customerInformationList'.
            localStorage.setItem('customerInformationList', JSON.stringify(cIL));


            // Øvelse 15.1 i bogen viser buildTable funktionen
            // Vi laver en funktion med parametren (data).
/*
1. 81: Først definerer vi en variabel, som bygger en tabel i HTML'en.
2. 82: Herefter bruger vi 'Object.keys()' for at finde ud af, hvilke properties der er i den 0. værdi af vores data-parametre.
3. 83: Her defineres en variabel, som bygger en række.
4. 85: Der bliver lavet en 'forEach' for properties i den 0. værdi for vores data-parametre (fields).
5. 85: Funktionen i vores 'forEach' bliver lavet med parametren 'field', der består af strings.
6. 86: Her bliver der skabt et table header element ved, hver celle.
7. 88: Nu sættes headCell til at være lig med'field'. Property'en'textContent' laver indholdet af headCell til at være en string.
8. 89: Cellerne bliver her tillagt rækken som dens 'barn'.
9. 92: Rækken bliver her tillagt tabellen som dens 'barn'.

10. 95: Vi laver endnu en 'forEach'. Her bliver der først loopet igennem hvert objekt i vores data-parameter.
11. 96: Der oprettes en variabel, row, hvor der skabes et et element vha. document.createElement, hvor der laves en table row.
12. 97: Vi laver herefter en ny 'forEach' inde i vores 'forEach', for på denne måde at kunne loope gennem alle felterne i hvert objekt i vores data-array.
13. 98: Vi laver en variabel der består af at skabe et td element i dokumentet.
14. 99: Nu sættes cell til at være lig med hver 'field' i hver objekt. Property'en'textContent' laver indholdet af 'cell' til at være en string.
15. 101: Herefter bliver hver td tillagt tr som dens 'barn'.
16. 103: Derefter bliver vores rows tillagt dens table som 'barn'.
17. 105: Nu kan vi returnere vores fulde tabel.
18. 109+110: Vi bruger querySelector til at finde det sted i HTML'en, hvor ID'et 'freakingFinal' står. Vi skaber et barn inde i '#freakingFinal', der består af table med cIL[i].Order.pop() som dens data-parameter.
19. 112: Efter dette ændrer vi element ID'et til at være en besked, der indeholder antallet af lineStander. Vi finder antallet ved at bruge .length af vores cIL[i].Order.pop().
 */

            function buildTable(data) {
                let table = document.createElement("table");
                let fields = Object.keys(data[0]);
                let headRow = document.createElement("tr");

                fields.forEach(function (field) {
                    let headCell = document.createElement("th");

                    headCell.textContent = field;
                    headRow.appendChild(headCell);
                });

                table.appendChild(headRow);


                data.forEach(function (object) {
                    let row = document.createElement("tr");
                    fields.forEach(function (field) {
                        let cell = document.createElement("td");
                        cell.textContent = object[field];

                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
                return table;
            }

            //implementering af øvelse 15.1 ovenfor.
            document.querySelector("#freakingFinal")
                .appendChild(buildTable(cIL[i].Order.pop()));

            document.getElementById('totalOrderPrice').innerHTML = 'Tid i kø er tid spildt! \nSå tillykke med dine ' + cIL[i].Order.pop().length + ' timers sparet tid - det kommer til at blive alle pengene værd!';
        }
    }
}
