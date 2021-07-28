const num1 = 2;
const num2 = 7;
//1
const getMaxOfTwo = function (num1, num2) {
    // checks
    if (isNaN(num1) || isNaN(num2) ) {
        return false;
    }
    if (num1>num2) {
        return num1;
    }
    return num2;

    res = getMaxOfTwo(10, 80);
    console.log (res)
    

}




//2
const min = function (value1, value2) {
    // checks
    if (isNaN(num1) || isNaN(num2) ) {
        return false;
    }
    const Min = Math.min(value1, value2);
    return Min;
}
const result2 = min(num1, num2)
console.log (result2)
//3
const oddoreven = function (value1) {
    // checks
    if (isNaN(num1) || isNaN(num2) ) {
        return false;
    }
    if  (value1 % 2 === 0) {
        return true;
    }
    
        return false;
    
}
const result3 = oddoreven(num1)
console.log (result3)
//4
