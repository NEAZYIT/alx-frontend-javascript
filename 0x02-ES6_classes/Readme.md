# 0x02. ES6 Classes

## Description

Brief project description and purpose.

## Requirements

| Requirement                                | Description |
| ------------------------------------------ | ----------- |
| **Operating System**                       | Ubuntu 18.04 LTS |
| **NodeJS Version**                         | 12.11.x |
| **Editors**                                | vi, vim, emacs, Visual Studio Code |
| **File Ending**                            | All files should end with a new line |
| **README.md**                              | A mandatory file at the root of the project folder |
| **Code Extension**                         | Your code should use the `.js` extension |
| **Testing**                                | Your code will be tested using Jest and the command `npm run test` |
| **Linting**                                | Your code will be verified against lint using ESLint |
| **Full Test**                              | Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test` |

## Installation

1. Install NodeJS 12.11.x:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
```

## Tasks

### Task 0: Implement a ClassRoom

Implement a class named `ClassRoom` with a constructor that accepts one attribute named `maxStudentsSize` (Number) and is assigned to `_maxStudentsSize`.

### Task 1: Initialize ClassRooms

Import the `ClassRoom` class and implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

### Task 2: Implement HolbertonCourse

Implement a class named `HolbertonCourse` with constructor attributes `name` (String), `length` (Number), and `students` (array of Strings). Verify the type of attributes during object creation and store each attribute in an "underscore" attribute version (e.g., `_name`). Implement a getter and setter for each attribute.

### Task 3: Implement Currency

Implement a class named `Currency` with constructor attributes `code` (String) and `name` (String). Store each attribute in an "underscore" attribute version. Implement a getter and setter for each attribute. Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`.

### Task 4: Implement Pricing

Import the `Currency` class and implement a class named `Pricing` with constructor attributes `amount` (Number) and `currency` (Currency). Implement a getter and setter for each attribute. Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`.

### Task 5: Implement a Building

Implement a class named `Building` with constructor attribute `sqft` (Number). Implement a getter for the `sqft` attribute. Consider this class as an abstract class. Ensure that any class that extends from it should implement a method named `evacuationWarningMessage`. If a class that extends from it does not have an `evacuationWarningMessage` method, throw an error with the message "Class extending Building must override evacuationWarningMessage".

### Task 6: Inheritance

Import `Building` from `5-building.js`. Implement a class named `SkyHighBuilding` that extends from `Building`. The `SkyHighBuilding` constructor should have attributes `sqft` (Number) and `floors` (Number). Implement a getter for each attribute. Override the method named `evacuationWarningMessage` and return the string "Evacuate slowly the NUMBER_OF_FLOORS floors".

### Task 7: Implement an Airport

Implement a class named `Airport` with constructor attributes `name` (String) and `code` (String). Store each attribute in an "underscore" attribute version. The default string description of the class should return the airport code.

### Task 8: Primitive - Holberton Class

Implement a class named `HolbertonClass` with constructor attributes `size` (Number) and `location` (String). Store each attribute in an "underscore" attribute version. When the class is cast into a Number, it should return the `size`. When the class is cast into a String, it should return the `location`.

### Task 9: Hoisting

Fix the provided code. Ensure it works correctly. The code involves creating a `HolbertonClass` and `StudentHolberton` classes. The `HolbertonClass` should have attributes `year` and `location`. The `StudentHolberton` should have attributes `firstName`, `lastName`, and `holbertonClass`. The code should create instances of these classes and a list of students.

### Task 10: Vroom

Implement a class named `Car` with constructor attributes `brand` (String), `motor` (String), and `color` (String). Store each attribute in an "underscore" attribute version. Add a method named `cloneCar`. This method should return a new object of the class.

## Author

- [NEAZYIT](https://github.com/NEAZYIT)
