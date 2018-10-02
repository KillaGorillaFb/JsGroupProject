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
  var num = document.getElementsByName("numPizzas")[0].selectedIndex+1;
  //var amt = num.options[index];
 
  var pizzaPrice = 10;
  var taxRate = 0.076;

  var subTotal = num * pizzaPrice;
  var taxes = subTotal * taxRate;
  var total = taxes + subTotal;

  //document.write("Blah Blah Blah")
  var name = document.getElementById("fullName");
  var phone = document.getElementById("phone");
  var type = document.getElementsByName("pizzaType")[0];
  var index1 = type.selectedIndex;
  var num = document.getElementsByName("numPizzas")[0];
  var index = num.selectedIndex;
    
  document.write("Your Subtotal is:"+ subTotal+" ");
  document.write(" ");
  document.write("Your tax is: "+taxes);

  document.write(" Your grand total is:" + total);

  //var amt1 = document.getElementsByName("numPizzas")[0];
  //var amt2 = amt1.selectedIndex;
  

  document.write(` Thank you for your order ${name.value}.
     We have your contact number at ${phone.value}. We are delivering `);
  document.write("\n");
  document.write(num.options[index].text);
  document.write("\n");
  document.write(type.options[index1].text);
  document.write(" pizza(s) to you ASAP. See you soon!");
    //return amt2;
//Order Calculation For Submit Button -- Still need to finish
}

//Event Listener
document.getElementById("button").addEventListener("click", showOrder);
