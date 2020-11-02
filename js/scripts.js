// Business Logic for Trip Log
function TripLog() {
  this.destinations = [];
  this.currentId = 0;
}

TripLog.prototype.addDestination = function (destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
};

TripLog.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Destinations -----

function Destination(city, food, landmark) {
  this.city = city;
  this.food = food;
  this.landmark = landmark;
}

Destination.prototype.displayDestination = function () {
  return (
    this.city +
    " is known for " +
    this.food +
    " and has this famous landmark, " +
    this.landmark +
    "."
  );
};
