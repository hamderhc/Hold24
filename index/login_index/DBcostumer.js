
var listCustomers = JSON.parse(localStorage.getItem('customerInformationList')) || [];
listCustomers.push(new ClassCostumer("Stine","Lønborg","stine-aif@hotmail.com","1234"));
listCustomers.push(new ClassCostumer("Jonathan","Mostov","jmmostov2603@gmail.com","4321"));
listCustomers.push(new ClassCostumer("Ramazan","Akbas","r.akbas@outlook.dk","1996"));
listCustomers.push(new ClassCostumer("Hans-Christian","Albertsen","HC@gmail.dk","1111"));

localStorage.setItem('costumerInformationList', JSON.stringify(listCustomers));

function login() {
    var username = document.getElementById('email').value;
    var passwo = document.getElementById('pwd').value;

    for(var i = 0; i < listCustomers.length; i++) {
        if(username == listCustomers[i].email && passwo == listCustomers[i].kodeord) {
            console.log("you are logged in ");
            return;
        }else{
    console.log("Forkert password eller email...");
        }
    }
}