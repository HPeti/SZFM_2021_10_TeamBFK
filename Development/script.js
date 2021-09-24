function getLevel() {
    /* Gets the selected difficulty from the 'szintek' element
     and returns it's value (1, 2, or 3).
    */
    var select = document.getElementById('szintek');
    return select.options[select.selectedIndex].value;
}

function randomNumber(length) {
    /* Generates a one or two digit number based on the parameter.
     If the given length equals 1, then returns a single digit number.
     If not, the function returns a two digit number.
    */
    if (length == 1) {
        //Returns a single digit number
        return Math.floor(Math.random() * 10);
    }
    else {
        //Returns a two digit number
        return Math.floor(Math.random() * 100);
    }
}

function randomOperation(type) {
    /* Generates a random operation (+, -, *, /) based on the given type
    Types:
    1 -> only + and -
    2 -> only +, -, and *
    everything else -> +, -, * and /
    */
    var operationNumber = 0;
    if (type == 1) {
        operationNumber = Math.floor(Math.random() * 2); // (max + 1)
    }
    else if (type == 2) {
        operationNumber = Math.floor(Math.random() * 3);
    }
    else {
        operationNumber = Math.floor(Math.random() * 4);
    }
    switch (operationNumber) {
        case 0:
            //addition
            return "+";
        case 1:
            //subtraction
            return "-";
        case 2:
            //multiplication
            return "*";
        case 3:
            //division
            return "/";
        default:
            //default case is addition
            return "+";
    }
}

function randomTask(level) {
    /* Generates a random task, based on the given level (parameter).
    Levels:
    1 -> + and - with single digit numbers
    2 -> +, - and * with single digit numbers
    3 -> +, -, and * with two digit numbers
    everything else -> writes '? ? ?' instead of a task (good for error checking)
    */
    //TODO: implement case and checks for division operation!
    switch (level) {
        case 1:
            //+ and - with single digits
            return randomNumber(1).toString() + " " + randomOperation(1) + " " + randomNumber(1).toString();
        case 2:
            //+, * and * with single digits
            return randomNumber(1).toString() + " " + randomOperation(2) + " " + randomNumber(1).toString();
        case 3:
            //+, * and * with two digits
            return randomNumber(2).toString() + " " + randomOperation(2) + " " + randomNumber(2).toString();
        default:
            return "? ? ?"; //default case for error checking
    }
}

/*
//lines for testing
console.log(getLevel());
console.log(randomNumber(1));
console.log(randomNumber(2));
console.log(randomNumber());

console.log(randomOperation(1));
console.log(randomOperation(2));
console.log(randomOperation());

console.log(randomTask(1));
console.log(randomTask(2));
console.log(randomTask(3));
*/