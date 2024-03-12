# 0x03. ES6 Data Manipulation

## Description
This project consists of solving various tasks related to ES6 data manipulation. Below are the tasks along with their descriptions and requirements.

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions must be exported and tasks with some description

## Tasks

### 0. Basic list of objects
- Create a function named `getListStudents` that returns an array of objects.
- Each object should have three attributes: id (Number), firstName (String), and location (String).
- The array contains the following students in order:
  - Guillaume, id: 1, in San Francisco
  - James, id: 2, in Columbia
  - Serena, id: 5, in San Francisco

### 1. More mapping
Create a function named `getListStudentIds` that returns an array of ids from a list of objects. This function takes one argument which is an array of objects in the same format as `getListStudents` from task 0. If the argument is not an array, the function should return an empty array.

### 2. Filter
Create a function named `getStudentsByLocation` that returns an array of objects who are located in a specific city. It should accept a list of students (from `getListStudents`) and a city (string) as parameters.

### 3. Reduce
Create a function named `getStudentIdsSum` that returns the sum of all the student ids. It should accept a list of students (from `getListStudents`) as a parameter.

### 4. Combine
Create a function named `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade. It should accept a list of students (from `getListStudents`), a city (String), and `newGrades` (Array of “grade” objects) as parameters.

### 5. Typed Arrays
Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number). If adding the value is not possible, it should throw the error "Position outside range".

### 6. Set data structure
Create a function named `setFromArray` that returns a Set from an array. It accepts an argument (Array) of any kind of element.

### 7. More set data structure
Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).

### 8. Clean set
Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`). It accepts two arguments: a set (Set) and a `startString` (String).

### 9. Map data structure
Create a function named `groceriesList` that returns a map of groceries with items (name, quantity).

### 10. More map data structure
Create a function named `updateUniqueItems` that returns an updated map for all items with an initial quantity at 1. It should accept a map as an argument.

## Author
[NEAZYIT](https://github.com/NEAZYIT)
