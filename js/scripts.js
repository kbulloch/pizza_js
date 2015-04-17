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

    return price;
  }
}
