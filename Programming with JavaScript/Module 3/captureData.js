/*
Description
The aim of this exercise is to access the content of an element, 
specifically to use a button click to replace text.
*/

/*
Task 1: The example.com website
*/

/*
Task 2: Get h1 into a variable
*/
var h1 = document.querySelector('h1');
/*
Task 3: Code an array
*/
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

/*
Task 4: Write a click-handling function
*/
function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}
    
/*
Task 5: Add an event listener
*/
h1.addEventListener('click', handleClicks)