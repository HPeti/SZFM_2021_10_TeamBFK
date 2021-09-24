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

/*
//lines for testing
console.log(getLevel());
console.log(randomNumber(1));
console.log(randomNumber(2));
console.log(randomNumber());
*/