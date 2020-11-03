# Destinations

#### Places You've Been, Practice Code Lesson 15 of Intermediate JavaScript, 11-02-2020

#### By Agata Kolodziej & David Sterry

## Description

We created a website to keep track of places a user have been. Each destination is a JS Object with multiple properties (city, food, landmark).
* Work in progress

## Specifications

### Describe: Destination()

| Test                                                                      | Expect                                                                                                                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It will take user input for the city they have been to, the food that city is known for, and the city's famous landmark    | Destination(city, food, landmark).toEqual(Chicago, hotdogs, Sears Tower);                                                                                                                               |
| It will take user input for destination and return a string.                     | Destination.displayDestination.toEqual("Chicago is known for hotdogs and has this famous landmark, Sears Tower.")   |

### Describe: TripLog()

| Test                                                                      | Expect                                                                                                                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It will store user destinations inputs into Trip Log desitnations array | TripLog(myTrips).toEqual([destinations]) |
| It will add destinations to array containing users all logged trips | TripLog.addDestination(destination).toEqual([destination]) |
| It will assign a numerical id to each inputed destination | TripLog.assignId(Portland).toEqual(0)


## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### View Online

- To view in browser click the GH-Pages link: 

##### Open Locally

- Click on the link to my repository: [My Repository]()
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone ` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

## Known Bugs

No known bugs present.

## Support and Contact Details

If any errors or bugs occur use Chrome DevTools or please email me, <agatakolohe@gmail.com>

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
