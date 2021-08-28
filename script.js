"use script";
window.addEventListener("DOMContentLoaded", calculate);

let results;

function calculate() {
    console.log("calculate");

    // Handle the click on Calculate button
    const calculate = document.getElementById("calculate");
    calculate.addEventListener("click", function() {

        // Read the numbers and the operator
        var firstNumber = parseFloat(document.getElementById("firstnumber").value);
        var secondNumber = parseFloat(document.getElementById("secondnumber").value);
        var operator = document.getElementById("operator").value;
        
        // Do the requested operation
        var result = 0;
        if (operator === "add") {
            result = firstNumber + secondNumber;
        }else if(operator === "sub") {
            result = firstNumber - secondNumber;
        }else if(operator === "mul") {
            result = firstNumber * secondNumber;
        }else {
            result = firstNumber / secondNumber;
        }

        // Check if the result must be rounded
        const doround = document.getElementById("doround");
        const decimals = document.getElementById("decimals");
        if (doround.checked) {
            // Round the result
            const round = Math.pow(10, decimals.value);
            result =  Math.round(result * round) / round;
        }

        // Write the result
        document.getElementById("firstnumber").value = '' + result;

        // Update the results list
        const results = document.querySelector('ul');
        var newResult = document.createElement('li');
        newResult.appendChild(document.createTextNode('' + result));
        results.appendChild(newResult);

        // Scroll the results list to the new element
        newResult.scrollIntoView();

    });

    // Clear the calculator
        clear();
}

function clear() {
    console.log("clear");

    // Handle the click to clear results
    const clear = document.getElementById("clear");
    clear.addEventListener("click", function() {

        // Clear the numbers and operator
        document.getElementById("secondnumber").value = '';
        document.getElementById("operator").value = "add";
        document.getElementById("doround").checked = false;
        document.getElementById("decimals").value = 0;
        
        // Clear the list results
        const results = document.querySelector('ul');
        while (results.lastElementChild) {
            results.removeChild(results.lastElementChild);
        }
    
    });
}
