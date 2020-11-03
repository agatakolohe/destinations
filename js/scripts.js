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

TripLog.prototype.findTrip = function (id) {
  for (let i = 0; i < this.destinations.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
    }
  }
  return false;
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

// User Interface Logic --------
let tripLog = new TripLog();

function displayTripDetails(tripLogToDisplay) {
  let tripList = $("ul#destinations");
  let htmlForTripInfo = "";
  tripLogToDisplay.destinations.forEach(function (destination) {
    htmlForTripInfo +=
      "<li id=" + destination.id + ">" + destination.city + "</li>";
  });
  tripList.html(htmlForTripInfo);
}
function showTrip(tripId) {
  const trip = tripLog.findTrip(tripId);
  $("#show-destination").show();
  $(".city-name").html(trip.city);
  $(".famous-food").html(trip.food);
  $(".famous-landmark").html(trip.landmark);
  //let buttons = $("#buttons");
  //buttons.empty();
  //buttons.append(
  //"<button class='deleteButton' id=" + +trip.id + ">Delete</button>" //need to create delete function for this to actually be of some use, or have the button have a different purpose
  //);
}
function attachTripListeners() {
  $("ul#destinations").on("click", "li", function () {
    showTrip(this.id);
  });
}

$(document).ready(function () {
  attachTripListeners();
  $("form#new-trip").submit(function (event) {
    event.preventDefault();
    const inputtedCity = $("input#new-city").val();
    const inputtedFood = $("input#new-food").val();
    const inputtedLandmark = $("input#landmark").val();
    $("input#new-city").val("");
    $("input#new-food").val("");
    $("input#landmark").val("");

    let newTrip = new Destination(inputtedCity, inputtedFood, inputtedLandmark);
    tripLog.addDestination(newTrip);
    displayTripDetails(tripLog);
  });
});
