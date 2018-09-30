<!--Pizza Types List-->
<h1>List Of Pizza Types:</h1>
<div id="list"></div>

<script>var number = ["Cheese", "Sausage", "Pepperoni", "Supreme", "Meat Lover"];
    var id = document.querySelector("#list");
    number.forEach((i) => {
        var newDiv = document.createElement('div')
        newDiv.innerHTML = i
        id.appendChild(newDiv)
    })</script>


<!--Number of Pizzas List-->
<h2>Number of Pizzas</h2>
<div id="numList"></div>

<script>var number = [1,2,3,4,5,6,7,8,9,10];
    var id = document.querySelector("#numList");
    number.forEach((i) => {
        var newDiv = document.createElement('div')
        newDiv.innerHTML = i
        id.appendChild(newDiv)
    })</script>


<!--Order Calculation For Submit Button-->
numPizza = document.getElementById("numList").innerHTML;
pizzaPrice = 10;
taxRate = .076;

subTotal = numPizza * pizzaPrice;
taxes = subTotal * taxRate;
total = taxes + subTotal;

<!--Display Name and Phone-->