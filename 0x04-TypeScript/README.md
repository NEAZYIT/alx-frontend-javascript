# 0x04. Typescript

This repository contains solutions for TypeScript exercises.

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The Typescript compiler should not show any warning or error when compiling your code

## Tasks

### 0. Creating an interface for a student (mandatory)

Write TypeScript code in `task_0/js/main.ts` to:
- Define an interface named `Student` with properties: `firstName`, `lastName`, `age`, and `location`.
- Create two students and an array `studentsList` containing them.
- Use Vanilla JavaScript to render a table with student names and locations.

### 1. Let's build a Teacher interface (mandatory)

Create TypeScript code in `task_1/js/main.ts` to:
- Define a `Teacher` interface with `firstName`, `lastName`, `fullTimeEmployee`, and `location`.
- Allow additional dynamic attributes like `contract`.
- Use `task_1` directory and provided configuration files.

### 2. Extending the Teacher class (mandatory)

Write TypeScript code in `task_1/js/main.ts` to:
- Define a `Directors` interface that extends `Teacher` with `numberOfReports`.
- Create instances of `Director` and `Teacher`.
- Use `task_1` directory and provided configuration files.

### 3. Printing teachers (mandatory)

Write TypeScript code in `task_1/js/main.ts` to:
- Create a function `printTeacher` that accepts `firstName` and `lastName` and returns the formatted name.
- Define an interface `printTeacherFunction` for the function.
- Use `task_1` directory and provided configuration files.

### 4. Writing a class (mandatory)

Write TypeScript code in `task_1/js/main.ts` to:
- Define a class `StudentClass` with constructor, `workOnHomework`, and `displayName` methods.
- Describe constructor and class through interfaces.
- Use `task_1` directory and provided configuration files.

### 5. Advanced types Part 1 (mandatory)

Create TypeScript code in `task_2/js/main.ts` to:
- Define interfaces and classes with specific methods.
- Implement and test class functionalities.
- Use `task_2` directory and provided configuration files.

### 6. Creating functions specific to employees (mandatory)

Write TypeScript code in `task_2/js/main.ts` to:
- Define functions `isDirector` and `executeWork` to handle different employee types.
- Test the functions with employee instances.
- Use `task_2` directory and provided configuration files.

### 7. String literal types (mandatory)

Write TypeScript code in `task_2/js/main.ts` to:
- Define a string literal type `Subjects` with specific values.
- Create a function `teachClass` that accepts the subject and returns a teaching message.
- Use `task_2` directory and provided configuration files.

### 8. Ambient Namespaces (mandatory)

Create TypeScript code in `task_3/js/main.ts` to:
- Write type declarations for third-party library functions.
- Implement a main script to use the library functions.
- Use `task_3` directory and provided configuration files.

### 9. Namespace & Declaration merging (mandatory)

Create TypeScript code in `task_4/js/main.ts` to:
- Define interfaces, classes, and namespaces for subjects.
- Implement and export constants and objects for subjects and teachers.
- Use `task_4` directory and provided configuration files.

### 10. Update task_4/js/main.ts (mandatory)

Update TypeScript code in `task_4/js/main.ts` to:
- Create constants and objects for subjects and teachers.
- Log information about subjects and teachers.
- Use `task_4` directory and provided configuration files.

### 11. Brand convention & Nominal typing (mandatory)

Create TypeScript code in `task_5/js/main.ts` to:
- Define interfaces and functions with brand conventions.
- Implement functions to sum credits of different types.
- Use `task_5` directory and provided configuration files.
