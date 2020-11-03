// let a = 5
// let b = 6
function add(a, b) {
    return a + b
}
// console.log(add(5, 6));

// let x = 5
// let y = 6
function multiply(x, y) {
//   return x + x + x + x + x + x
  let total = 0;
  let index = 0;
  while ( index < y ) {
    index++
    total = add(total, x);
}
    return total
}
    // console.log(multiply(5, 6));

//  let m = 3
//  let n = 4
function power(x, n) {
   let total = 1
   for (let index = 0; index < n;  index ++) {
    total = multiply(total, x);
   }
     return total
}
    //  console.log(power(3, 4));

    // let d = 3
function factorial(d) {
  let number = 1
  for (let index = 1; index <= d; index++) {
      number = multiply(number, index)
  }
     return number
}
    // console.log(factorial(3));

let fibonacci = function(result,lenght) {
    let num1 = result[0],
        num2 = result[1],
        next,
        count = 2;
    while (count < lenght) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
        count++
    }
      return result

};
console.log(fibonacci(2));





