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
