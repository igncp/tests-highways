var myPlane = {
  brand: "Airbus",
  fly: function() {
    return "To infinity and beyond!";
  }
};

var otherPlane = Object.create(myPlane, {
  brand: {
    value: 'Boeing'
  }
});

module.exports = {
  myPlane: myPlane,
  otherPlane: otherPlane
};
