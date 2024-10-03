function addition(...numbers) {
    return numbers.reduce((total, num) => total + num);
}
function subtraction(...numbers) {
    return numbers.reduce((total, num) => total - num);
}
function multiplication(...numbers) {
    return numbers.reduce((total, num) => total * num);
}
function division(...numbers) {
    return numbers.reduce((total, num) => total / num);
}

console.log(addition(9,4,5,2,52,3));