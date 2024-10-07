function countReversals(expression) {
    const n = expression.length;
    let openCount = 0;
    let closeCount = 0;

    for (const char of expression) {
        if (char === '{') {
            openCount++;
        } else {
            if (openCount > 0) {
                openCount--;
            } else {
                closeCount++;
            }
        }
    }

    return Math.ceil(openCount / 2) + Math.ceil(closeCount / 2);
}

const input1 = '{{{';
console.log(countReversals(input1)); 

const input2 = '{{{{}}';
console.log(countReversals(input2)); 
