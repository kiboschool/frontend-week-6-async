// 1. Create an asynchronous function that logs a message after a delay, and use it to see the order of execution in your code.

const delayedLog = (message, delay) => {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayedLog("This is a delayed message", 2000);
console.log("This message appears first");

/* Callbacks */

// 1. Create a function that accepts a callback. The function should return a string after 2 seconds using `setTimeout`.

const delayCallback = (callback) => {
    setTimeout(() => {
        callback("This is a delayed message with callback");
    }, 2000);
}

delayCallback(message => console.log(message));

/* Async-await / Promises */

// 1. Fetch data from a public API using `fetch` (fetch uses promises under the hood) and console.log
// I will use JSON Placeholder API for this task

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

// 2. Rewrite previous api call with `async/await`. Handle possible errors with `try/catch`.

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchData();
