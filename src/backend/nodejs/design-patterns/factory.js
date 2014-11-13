function Helicopter(options) {
  this.speed = options.state || "slow";
  this.color = options.color || "silver";
  this.fly = function() {
    return 'fiufiufiu';
  };
}

function JetPlane(options) {
  this.speed = options.state || "fast";
  this.color = options.color || "transparent (?)";
  this.fly = function() {
    return 'chiuuum';
  };
}

function AircraftFactory() {}

AircraftFactory.prototype.aircraftClass = JetPlane; // Default

AircraftFactory.prototype.buildAircraft = function(options) {
  switch (options.type) {
    case "helicopter":
      this.aircraftClass = Helicopter;
      break;
    case "jet plane":
      this.aircraftClass = JetPlane;
      break;
  }

  return new this.aircraftClass(options);
};

module.exports = {
  AircraftFactory: AircraftFactory
};
