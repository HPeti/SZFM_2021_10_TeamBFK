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
            //+, -, * with two digit numbers
            // / has a single digit divisor to make things easier 
            var firstNumber = randomNumber(2);
            var secondNumber = 0;
            var operation = randomOperation(3); //includes divisions too
            if(operation == "/"){
                secondNumber = randomNumber(1); // in this case, this is the divisor
                while(secondNumber == 0 || (firstNumber / secondNumber) % 1 != 0){
                    firstNumber = randomNumber(2);
                    secondNumber = randomNumber(1);
                    //console.log(secondNumber);
                }
            }
            else{
                secondNumber = randomNumber(2);
            }
            return firstNumber.toString() + " " + operation + " " + secondNumber.toString(); 
        default:
            return "? ? ?"; //default case for error checking
    }
}

function generateTasks() {
    /* This function generates 8 tasks and writes them into the webpage's elements.
    Also clears the answers from the inputs.
    This method is called from the 
    kerdes_x_szoveg is for the x-th task
    kerdes_x is for the x-th task's answer
    */
    var level = parseInt(getLevel());
    for (let index = 1; index <= 8; index++) {
        document.getElementById("kerdes_" + index + "_szoveg").innerHTML = randomTask(level);
        document.getElementById("kerdes_" + index).value = "";
    }
}

function calculate(question) {
    /* This function calculates a value from a given question or statement
    Example: 1 + 1 -> 2, ...
    */
    var elements = question.split(' ');
    switch (elements[1]) {
        case "+":
            return parseInt(elements[0]) + parseInt(elements[2]);
        case "-":
            return parseInt(elements[0]) - parseInt(elements[2]);
        case "*":
            return parseInt(elements[0]) * parseInt(elements[2]);
        case "/":
            return parseInt(elements[0]) / parseInt(elements[2]);
    }
}

function evaluateTasks() {
    /* This function evaluates the given tasks with the given answers from the webpage.
    Also checks if there are no tasks or no given answers!
    Returns value into a element which has the id 'eredmeny'.
    */
    if (document.getElementById("kerdes_1_szoveg").innerHTML.length == 0) {
        alert("Nincsenek kiértékelendő feladatok!");
    }
    else {
        var points = 0
        for (let index = 1; index <= 8; index++) {
            var question = document.getElementById("kerdes_" + index + "_szoveg").innerHTML;
            //console.log(question);
            var answer = document.getElementById("kerdes_" + index).value;
            //console.log(valasz);
            if (answer.length != 0) {
                //console.log(calculate(question));
                if (calculate(question) == answer) {
                    //console.log(index + ". question is correct!");
                    points++;
                }
            }
        }
        document.getElementById("eredmeny").innerHTML = "Eredmény: " + points;
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

console.log(calculate("1 + 1"));
console.log(calculate("1 - 1"));
console.log(calculate("1 * 2"));
console.log(calculate("8 / 2"));

console.log(10 / 1);
console.log (10 / 9.9 % 1 == 0);
console.log((10 / 3) % 1 == 0);
*/

function getHelp(id) {
    /* This function gives the correct helping example to the guy with questionmark image's bubble speach
    example: 78 * 51   ->   "Szorzás: Mind például..."
    */

    var phrase = document.getElementById("kerdes_" + id + "_szoveg").innerHTML;


    var elements = phrase.split(' ');
    switch (elements[1]) {
        case "+":
            document.getElementById("question_" + id + "_tip").innerHTML = "Összeadás: Például 3 alma és 2 alma az összesen öt alma.";
            break;
        case "-":
            document.getElementById("question_" + id + "_tip").innerHTML = "Kivonás: Például 5 almából megeszel 2 almát, akkor 3 alma marad.";
            break;
        case "*":
            document.getElementById("question_" + id + "_tip").innerHTML = "Szorzás: Például, ha 1 kosárba 3 alma fér, akkor 2 kosárba 6 almád lesz.";
            break;
        case "/":
            document.getElementById("question_" + id + "_tip").innerHTML = "Osztás: Például: 6 almát igazságosan 2 felé bontva 3-at kapsz.";
            break;
        default:
            document.getElementById("question_" + id + "_tip").innerHTML ="Összeadás: +&#10;Kivonás:      - &#10;Szorzás:      *";
    }
}
