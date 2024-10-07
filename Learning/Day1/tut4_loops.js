let numbers = [1, 2, 3, 4, 5];
//For loop

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);  // Output: 1, 2, 3, 4, 5
}


//for of
for (let num of numbers) {
  console.log(num);  // Output: 1, 2, 3, 4, 5
}

// for in 

for (let index in numbers) {
  console.log(index);      // Output: 0, 1, 2, 3, 4 (indices)
  console.log(numbers[index]);  // Output: 1, 2, 3, 4, 5 (values)
}

//foreach 

numbers.forEach((value, index, array) => {
    
});

//While 

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
// Output: 0, 1, 2, 3, 4


//do while
count =0;
do {
  console.log(count);
  count++;
} while (count < 5);
// Output: 0, 1, 2, 3, 4
