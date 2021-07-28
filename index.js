const num = 2 ;
const str = '3';
const getSumOfTwo = function (num1, num2) {
    // checks
    if (isNaN(num1) || isNaN(num2) ) {
        return false;
    }

    const sum = parseFloat(num1) + parseFloat(num2);

    return sum;
}

const result = getSumOfTwo(num, str);
console.log(result);