describe('Pizza', function() {

  describe('getPrice()', function() {

    it("will return a price of 10 for a small cheese pizza", function() {
      var test_pizza = Object.create(Pizza);
      test_pizza.init();
      expect(test_pizza.getPrice()).to.equal(10);
    });

  });


});
