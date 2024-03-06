# 0x01. ES6 Promises

## Project Description

This project focuses on implementing and understanding asynchronous programming in JavaScript using ES6 Promises. The tasks below cover various aspects of promises, error handling, and promise chaining. Each task builds upon the previous, providing a comprehensive learning experience in working with promises.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Tasks](#tasks)
- [Author](#author)
  
## Requirements <a name="requirements"></a>

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- All of your functions must be exported.

## Setup <a name="setup"></a>

### Install NodeJS 12.11.x  

In your home directory, run the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:
```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint using the supplied package.json:

```bash
npm install
```

# Tasks <a name="tasks"></a>

0. Keep every promise you make and only make promises you can keep
   - **Description:** Return a Promise using this prototype function `getResponseFromAPI()`.

1. Don't make a promise...if you know you can't keep it
   - **Description:** Using the prototype below, return a promise. The parameter is a boolean.

2. Catch me if you can!
   - **Description:** Using the function prototype below, append three handlers to the function:
      - When the Promise resolves, return an object with the attributes `status: 200` and `body: success`.
      - When the Promise rejects, return an empty Error object.
      - For every resolution, log "Got a response from the API" to the console.

3. Handle multiple successful promises
   - **Description:** Import `uploadPhoto` and `createUser` from `utils.js`. Use the prototype function `handleProfileSignup()` to collectively resolve all promises and log `body firstName lastName` to the console. In the event of an error, log "Signup system offline" to the console.

4. Simple promise
   - **Description:** Using the prototype function `signUpUser(firstName, lastName)`, return a resolved promise with the object `{ "firstName": value, "lastName": value }`.

5. Reject the promises
   - **Description:** Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string). The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`.

6. Handle multiple promises
   - **Description:** Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled, it should return an array with the structure `[ { "status": status_of_the_promise, "value": value or error returned by the Promise }, ... ]`.

7. Load balancer
   - **Description:** Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise). The function should return the value returned by the promise that resolved first.

8. Throw error / try catch
   - **Description:** Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number). When the denominator argument is equal to 0, the function should throw a new error with the message "cannot divide by 0". Otherwise, it should return the numerator divided by the denominator.

9. Throw an error
   - **Description:** Write a function named `guardrail` that will accept one argument `mathFunction` (Function). This function should create and return an array named `queue`. When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message "Guardrail was processed" 

### Author <a name="author"></a>

- **Github**:
[NEAZYIT](https://github.com/NEAZYIT)