let colorBoxElement = document.querySelector("#color-box");

// JS for the gray button
let grayButton = document.querySelector("#gray-button");

grayButton.addEventListener("click", function () {
    colorBoxElement.className = "gray";
})

// JS for the blue button
let blueButton = document.querySelector("#blue-button");

blueButton.addEventListener("click", function () {
    colorBoxElement.className = "blue";
})

// JS for the pink button
let pinkButton = document.querySelector("#pink-button")

pinkButton.addEventListener("click", function () {
    colorBoxElement.className = "whatever"
})

let count = 0;

let countspanElement = document.querySelector("#countspan");

let counterButton = document.querySelector("#counter-button");

counterButton.addEventListener("click", function () {
    // assign the value of count to be the old count value plus 1
    count++
    // assign the innerHTML of countspanElement to count
    countspanElement.innerHTML = count
})

let evenOrOddButton = document.querySelector("#even-or-odd-button");

evenOrOddButton.addEventListener("click", function () {
    // check if count is even
    if (count % 2 === 0) {
        // if it is even, run this code
        alert("even")
    } else {
        // if it is not even, run this code
        alert("odd")
    }

})