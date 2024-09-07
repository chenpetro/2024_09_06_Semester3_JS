let value = 5
// value = value + 10
value += 10
console.log (5!== 5)

let a = '5'
console.log(typeof Number(a));
const user = Number(prompt('Enter your number'))
console.log(typeof user);
console.log(user);


// Parse to the full number
console.log(Number.parseInt('5px')); // 5
console.log(Number.parseInt('12qwe74')); // 12
console.log(Number.parseInt('12.46qwe79')); // 12
console.log(Number.parseInt('qweqwe')); // NaN




// Parse to the decimal number
console.log(Number.parseFloat('5px')); // 5
console.log(Number.parseFloat('12qwe74')); // 12
console.log(Number.parseFloat('12.46qwe79')); // 12.46
console.log(Number.parseFloat('qweqwe')); // NaN

//  Math.floor(num) - повертає найбільше ціле число, менше, або дорівнює вказаному
console.log(Math.floor(1.7)); // 1


// Math.ceil(num) - повертає найменше ціле число,
// більше, або дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2


// Math.round(num) - повертає значення числа, округлене до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2


// Math.max(num1, num2, ...) - повертає найбільше число з набору
console.log(Math.max(20, 10, 50, 40, 103.5, 102, 1045, 104)); // 1045


// Math.min(num1, num2, ...) - повертає найменше число з набору
console.log(Math.min(20, 10, 50, 40)); // 10


// Math.pow(base, exponent) - зведення в ступінь
console.log(Math.pow(2, 4)); // 16


// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // 

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.floor(Math.random() * 6 + 1)); // 
console.log(Math.floor(Math.random() * 10 + 5)); // 
console.log(Math.floor(Math.random() * 26 + 12)); //   12  37

 let r = confirm("Press a button!");
 console.log (r)

 alert ("GOGOGO")