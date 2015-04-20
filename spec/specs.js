describe('Pizza', function() {

  describe('getPrice()', function() {

    it("will return a price of 10 for a Small Cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Small";
      test_pizza.topping = "Cheese";
      expect(test_pizza.getPrice()).to.equal(10);
    });

    it("will return a price of 13 for a Medium Cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Medium";
      test_pizza.topping = "Cheese";
      expect(test_pizza.getPrice()).to.equal(13);
    });

    it("will return a price of 17 for a Large Cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Large";
      test_pizza.topping = "Cheese";
      expect(test_pizza.getPrice()).to.equal(17);
    });

    it("will return a price of 12 for a Small Vegetarian pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Small";
      test_pizza.topping = "Vegetarian";
      expect(test_pizza.getPrice()).to.equal(12);
    });

    it("will return a price of 15 for a Medium Vegetarian pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Medium";
      test_pizza.topping = "Vegetarian";
      expect(test_pizza.getPrice()).to.equal(15);
    });

    it("will return a price of 19 for a Large Vegetarian pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Large";
      test_pizza.topping = "Vegetarian";
      expect(test_pizza.getPrice()).to.equal(19);
    });

    it("will return a price of 14 for a Small Pepperoni pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Small";
      test_pizza.topping = "Pepperoni";
      expect(test_pizza.getPrice()).to.equal(14);
    });

    it("will return a price of 17 for a Medium Pepperoni pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Medium";
      test_pizza.topping = "Pepperoni";
      expect(test_pizza.getPrice()).to.equal(17);
    });

    it("will return a price of 21 for a Large Pepperoni pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "Large";
      test_pizza.topping = "Pepperoni";
      expect(test_pizza.getPrice()).to.equal(21);
    });

  });

});
