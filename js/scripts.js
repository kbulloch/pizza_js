var Pizza = {
  init: function() {
    this.size = "";
    this.topping = "";
  },
  getPrice: function() {
    var price = 10;

    if(this.size === "Medium") {
      price += 3;
    }
    if(this.size === "Large") {
      price += 7;
    }
    if(this.topping === "Vegetarian") {
      price += 2;
    }
    if(this.topping === "Pepperoni") {
      price += 4;
    }

    return price;
  }
}

$(document).ready(function() {

  var order_total = 0;

  $("#order").submit(function(event) {

    event.preventDefault();

    var order_size = $("select#size").val();
    var order_topping = $("select#topping").val();

    var new_pizza = Object.create(Pizza);

    new_pizza.init();
    new_pizza.size = order_size;
    new_pizza.topping = order_topping;

    var pizza_cost = new_pizza.getPrice();
    order_total += pizza_cost;

    $(".order-total").text(order_total);

    $("#pizza-list").append("<li>" +
      new_pizza.size + " " +
      new_pizza.topping + ", $" +
      pizza_cost + "</li>");

    $("#pizza-order").show();

    $(".clear-orders").click(function() {
      $("#pizza-list").empty();
      order_total = 0;
      $("#pizza-order").hide();
    });

  });


});
