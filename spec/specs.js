describe('Pizza', function() {

  describe('getPrice()', function() {

    it("will return a price of 10 for a small cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "small";
      test_pizza.topping = "cheese";
      expect(test_pizza.getPrice()).to.equal(10);
    });

    it("will return a price of 13 for a medium cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "medium";
      test_pizza.topping = "cheese";
      expect(test_pizza.getPrice()).to.equal(13);
    });

    it("will return a price of 17 for a large cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "large";
      test_pizza.topping = "cheese";
      expect(test_pizza.getPrice()).to.equal(17);
    });

    it("will return a price of 12 for a small veggie pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "small";
      test_pizza.topping = "veggie";
      expect(test_pizza.getPrice()).to.equal(12);
    });

    it("will return a price of 15 for a medium veggie pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      test_pizza.size = "medium";
      test_pizza.topping = "veggie";
      expect(test_pizza.getPrice()).to.equal(15);
    });



  });


});
