function part1(){
    // Start your code here for first part. There is no need to return any value.
    var studentId = "101575878";
    var fullName = "Abdullah Al Mujahid Nakib";
    var professorName = "Leo";
    var labDay = "Tuesday";
    var semester = "4th Sem";

    // Display original info at bottom-right with bold labels
    document.write('<div style="position: fixed; bottom: 10px; left: 10px; text-align: left;">');
    
    document.write('<p><b>Student ID: </b>' + studentId + ' <b>Full Name: </b>' + fullName + '<br>');
    document.write('<b>Lab Professor: </b>' + professorName + ' <b>Lab Session Day: </b>' + labDay + '</p>');

    // Helper function to shift every character left
    function encodeStr(str) {
        var encoded = "";
        for (var i = 0; i < str.length; i++) {
            encoded = encoded + String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return encoded;
    }

    document.write('<p><b>Encoded Student ID: </b>' + encodeStr(studentId) + ' <b>Encoded Full Name: </b>' + encodeStr(fullName) + '<br>');
    document.write('<b>Encoded Lab Professor: </b>' + encodeStr(professorName) + ' <b>Encoded Lab Session Day: </b>' + encodeStr(labDay) + '</p>');
    
    document.write('</div>');
}

function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    num1 = num1 + 5;
    num2 = num2 - 3;

    if (num1 < num2) {
        _return = -1;
    } else if (num1 > num2) {
        _return = 1;
    } else {
        _return = 0;
    }
    
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part3(startNum, endNum) {
    // Assign the return value to a variable named _return
    let _return = '';
    // To hold the sum of numbers for the divisibility condition
    let sum = 0;

    if (startNum < endNum) {
        // Concatenate ascending from startNum to endNum
        for (let i = startNum; i <= endNum; i++) {
            _return = _return + i;
            sum = sum + i;
        }
    } else if (startNum > endNum) {
        // Concatenate descending from startNum to endNum
        for (let i = startNum; i >= endNum; i--) {
            _return = _return + i;
            sum = sum + i;
        }
    } else {
        // Both numbers are the same, return their sum as string
        sum = startNum + endNum;
        _return = '' + sum;
    }

    // Check if sum is divisible by 3, prepend "Magic"
    if (sum % 3 === 0) {
        _return = 'Magic' + _return;
    }

    /* Your code ends here.
       Don't add or change anything after this line.*/
       return _return;      
}




function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here

    // Check if index is invalid
    if (array_index < 0 || array_index >= array.length) {
        _return = false;
    } else if (array[array_index] === 0) {
        // Value at index is 0
        _return = true;
    } else if (array[array_index] % 2 === 0) {
        // Value is even: sum from start to index - 1
        let sum = 0;
        for (let i = 0; i < array_index; i++) {
            sum = sum + array[i];
        }
        _return = sum;
    } else {
        // Value is odd: sum from index + 1 to end
        let sum = 0;
        for (let i = array_index + 1; i < array.length; i++) {
            sum = sum + array[i];
        }
        _return = sum;
    }

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here

    let oddNumbers = [];
    let evenNumbers = [];
    let sumOdd = 0;
    let sumEven = 0;

    // Separate odd and even numbers
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]);
            sumOdd = sumOdd + array[i];
        } else {
            evenNumbers.push(array[i]);
            sumEven = sumEven + array[i];
        }
    }

    // Rearrange: odds first, then evens
    let result = [];
    for (let i = 0; i < oddNumbers.length; i++) {
        result.push(oddNumbers[i]);
    }
    for (let i = 0; i < evenNumbers.length; i++) {
        result.push(evenNumbers[i]);
    }

    // Append sumOdd at second last and sumEven at last
    result.push(sumOdd);
    result.push(sumEven);

    _return = result;

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


