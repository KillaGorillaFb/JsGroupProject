var myobject = {
  ValueA: "Cheese",
  ValueB: "Sausage",
  ValueC: "Pepperoni",
  ValueD: "Supreme",
  ValueE: "Meat Lover"
}; //User can add new Key:Value Pair here to update Pizza Types

//Pizza Type
var select = document.getElementById("pizzaType");
for (index in myobject) {
  select.options[select.options.length] = new Option(myobject[index], index);
}

var myobject = {
  ValueA: "1",
  ValueB: "2",
  ValueC: "3",
  ValueD: "4",
  ValueE: "5",
  ValueF: "6",
  ValueG: "7",
  ValueH: "8",
  ValueI: "9",
  ValueJ: "10"
}; //User can add new Key:Value Pair here to update Pizza Amount

//Number Of Pizzas
var select = document.getElementById("numPizzas");
for (index in myobject) {
  select.options[select.options.length] = new Option(myobject[index], index);
}

//Display Order Summary Function
function showOrder() {
  var name = document.getElementById("fullName");
  var phone = document.getElementById("phone");
  var type = document.getElementsByName("pizzaType")[0];
  var index1 = type.selectedIndex;
  var num = document.getElementsByName("numPizzas")[0];
  var index = num.selectedIndex;
  var div = document.getElementById("test");
  //To avoid document.write replacing form on page and outputting to empty 
  //page using this method instead of document.write

  //To avoid document.write replacing form on page and outputting to empty 
  //page using this method instead of document.write
  div.innerHTML += `</br>Thank you for your order ${name.value}.</br>
     We have your contact number at ${phone.value}.</br> We are delivering  `;
  div.innerHTML += " " + num.options[index].text;
  div.innerHTML += " " + type.options[index1].text;
  div.innerHTML += " pizza(s) to you ASAP. </br>See you soon!";

}

//Order Calculation For Submit Button -- Still need to finish
function calcCost() {
  var div = document.getElementById("test");

  //Pulls user selection from numPizzas index
  var pizzaPicker = document.getElementsByName("numPizzas")[0];
  //Converts selection to number for calculation
  var numPizzas = parseInt(pizzaPicker.options[pizzaPicker.selectedIndex].text);

  var pizzaPrice = 10;
  var taxRate = 0.076;

  var subTotal = numPizzas * pizzaPrice;
  var taxes = subTotal * taxRate;
  var total = taxes + subTotal;

  div.innerHTML += `</br></br>Order Details:</br>Your subtotal: $ ${subTotal}.00
  </br> Taxes Charged: $ ${taxes} 
  </br> Your total: $ ${total}`;
}

//Need to get both functions to run when button clicked
function runBoth() {
  var div = document.getElementById("test");
  div.innerHTML = " ";
  showOrder();
  calcCost();
}

//Event Listener
document.getElementById("button").addEventListener("click", runBoth);