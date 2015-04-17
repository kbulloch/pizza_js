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
