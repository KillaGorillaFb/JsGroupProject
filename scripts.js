var myobject = {
    ValueA: 'Cheese',
    ValueB: 'Sausage',
    ValueC: 'Pepperoni',
    ValueD: 'Supreme',
    ValueE: 'Meat Lover',
};//User can add new Key:Value Pair here to update Pizza Types

var select = document.getElementById("pizzaType");
for (index in myobject) {
    select.options[select.options.length] = new Option(myobject[index], index);
}


var myobject = {
    ValueA: '1',
    ValueB: '2',
    ValueC: '3',
    ValueD: '4',
    ValueE: '5',
    ValueF: '6',
    ValueG: '7',
    ValueH: '8',
    ValueI: '9',
    ValueJ: '10'
};//User can add new Key:Value Pair here to update Pizza Amount


var select = document.getElementById("numPizzas");
for (index in myobject) {
    select.options[select.options.length] = new Option(myobject[index], index);
}


//Order Calculation For Submit Button -- Still need to finish
numPizza = document.getElementById("numList").innerHTML;
pizzaPrice = 10;
taxRate = .076;

subTotal = numPizza * pizzaPrice;
taxes = subTotal * taxRate;
total = taxes + subTotal;

//Display Name and Phone