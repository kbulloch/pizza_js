var Pizza = {
  init: function() {
    this.size = "";
    this.topping = "";
  },
  getPrice: function() {
    var price = 10;

    if(this.size === "medium") {
      price += 3;
    }
    if(this.size === "large") {
      price += 7;
    }
    if(this.topping === "veggie") {
      price += 2;
    }
    if(this.topping === "pepperoni") {
      price += 4;
    }

    return price;
  }
}

$(document).ready(function() {

  $("#order").submit(function(event) {

    event.preventDefault();

    var order_size = $("select#size").val();
    var order_topping = $("select#topping").val();

    var new_pizza = Object.create(Pizza);

    new_pizza.init();
    new_pizza.size = order_size;
    new_pizza.topping = order_topping;

    var order_cost = new_pizza.getPrice();

    $(".order-price").text(order_cost);

  });

});
