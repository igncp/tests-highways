describe("Car Tests", function() {
  beforeEach(function() {
    this.Car = _.cloneDeep(window.plainJS.Car);
    this.car = new this.Car();
  });

  it("calls the getBrand() function", function() {
    spyOn(this.car, "getBrand");
    this.car.toString();
    expect(this.car.getBrand).toHaveBeenCalled();
  });
  
  it("can chain methods after the setter method", function() {
    expect(this.car.setBrand('Foo').getBrand).toBeDefined();
  });
});
