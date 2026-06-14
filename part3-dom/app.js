// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const mainHeading = document.getElementById('main-heading')
const subTitle = document.getElementById('subtitle')
const list = document.getElementById('item-list')
// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)

const h2 = document.querySelector('h2');
const toggleBtn = document.querySelector('#toggle-btn')
const listItem = document.querySelector('.list-item')
// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const listItems = document.querySelectorAll('.list-item')
console.log(listItems)
// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
listItems.forEach((item) => {
    console.log(item.textContent)
})

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//          The difference between the two is that getElementById will only work for ids, while querySelector will work for both classes and ids.
//          answer:QuerySelectorAll returns a nodelist, its different from an array because you can't use array methods on it, to loop through it you would need a forEach.


// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
console.log(mainHeading.textContent)

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.

subTitle.textContent = 'Page loaded successfully.'
// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const outputText = document.querySelector('#output-text')
outputText.textContent = 'Sample Text'

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
document.querySelector('#output-box').style.backgroundColor = 'red'

// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer: textContent is a property used to update the text value on an element. Text content deal largely with the text value inside an element while innerhtml
//          deals with the actual tags themselves. Using innerHtml is risky when handling input due to script attacks. 
//          


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeBtn = document.querySelector('#change-btn')
changeBtn.addEventListener('click', (e) => {
    mainHeading.style.color = 'blue'
})

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
toggleBtn.addEventListener('click', (e) => {
    outputText.classList.toggle('highlighted')
})

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
mainHeading.classList.add('active')
console.log(mainHeading.classList)
listItem.classList.remove('list-item')
console.log(listItem.classList)
// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer: An evernt listener is a function provided by the browser to wait for a specific action and then run a callback once said action is triggered.
//          The reason why you cant write the code outside of a function and expect to run when the button is clicked is because the code runs a call back after it waits for the action. Another major reason would be 
//          that javascript reads from top to bottom, and listeners can stay there waiting forever, which is why the callback makes sure to run after the even is triggered.
//


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: toggle looks to see if the class contains the name of the class you would like to toggle
//          if it does it removes it, if it doesn't it adds it. 
//          add simply adds the class to the element.
//          remove simply removes the class from the element
//          element.className will replace every class and overwrite it with whatever input you give, this is useful if you wish to just clean the element of classes altogether.


// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".
const li = document.createElement('li')
li.textContent = 'Sample Text from Yeffry';
li.classList.add('list-item')
list.appendChild(li)

// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after

document.querySelector('#add-btn').addEventListener('click', (e) => {
    let textInput = document.querySelector('#item-input')
    let newLi = document.createElement('li')
    newLi.textContent = textInput.value
    newLi.classList.add('list-item')
    list.appendChild(newLi)
    textInput.value = '';
})

// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
outputText.remove()

// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer: Create elements simply creates a new html element with the specified element as argument
//          appendChild takes an element and appends it as a child element
//          im not sure, id say immetely after the javascript runs?

