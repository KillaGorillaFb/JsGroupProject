//Pizza Types List

    var number = ["Cheese", "Sausage", "Pepperoni", "Supreme", "Meat Lover"];
    var id = document.querySelector("#list");
    number.forEach((i) => {
        var newDiv = document.createElement('div')
        newDiv.innerHTML = i
        id.appendChild(newDiv)
    })


//Number of Pizzas List
    var number = [1,2,3,4,5,6,7,8,9,10];
    var id = document.querySelector("#numList");
    number.forEach((i) => {
        var newDiv = document.createElement('div')
        newDiv.innerHTML = i
        id.appendChild(newDiv)
    })


//Order Calculation For Submit Button
numPizza = document.getElementById("numList").innerHTML;
pizzaPrice = 10;
taxRate = .076;

subTotal = numPizza * pizzaPrice;
taxes = subTotal * taxRate;
total = taxes + subTotal;

//Display Name and Phone
