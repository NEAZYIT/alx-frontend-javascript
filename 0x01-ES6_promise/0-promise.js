// 0-promise.js

function getResponseFromAPI() {
    // Create and return a new Promise
    return new Promise((resolve, reject) => {
      // Your asynchronous logic or API call goes here
      // For simplicity, let's resolve the promise after a short delay
      setTimeout(() => {
        // Simulating a successful API response
        resolve({ data: "API response data" });
      }, 1000);
    });
  }
  
  // Export the function
  export default getResponseFromAPI;  