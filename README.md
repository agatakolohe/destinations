#### Specs

Describe: Destination()

Test: It will take user input for the city they have been to, the food that city is known for, and the city's famous landmark.

Expect: Destination(city, food, landmark).toEqual(Chicago, hotdogs, Sears Tower);

Test: It will take user input for destination and return a string.

Expect: Destination.displayDestination.toEqual("Chicago is known for hotdogs and has this famous landmark, Sears Tower.")

Describe: TripLog()

Test: It will store user destinations inputs into Trip Log desitnations array.
Expect: TripLog(myTrips).toEqual([destinations])

Test: It will add destinations to array containing users all logged trips

Expect: TripLog.addDestination(destination).toEqual([destination])

Test: It will assign a numerical id to each inputed destination
Expect: .assignId(Portland).toEqual(0)
