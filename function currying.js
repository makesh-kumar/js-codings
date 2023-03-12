/******************************************************************* */

// function curry(defaultVal = 0) {
//   let total = defaultVal;
//   return function (b) {
//     total = total + b;
//     return total;
//   };
// }

// let sum1 = curry();
// console.log(sum1(2));
// console.log(sum1(3));
// console.log(sum1(4));

/************************************************************* */

// with only one args...

// function sum(a) {
//   return function (b) {
//     if (b || b === 0) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(sum(1)(2)(3)());

/***************************************************** */

//  with multiple args...

// function sum(...args1) {
//  if(args1.length === 0) return 0;
//   return function (...args2) {
//     if (args2.length) {
//         return sum(...args1, ...args2);
//     //   return sum(
//     //     [...args1,...args2].reduce((a, b) => {
//     //       return a + b;
//     //     }, 0)
//     //   );
//     } else {
//       return args1.reduce((a, b) => {
//         return a + b;
//       }, 0);
//     }
//   };
// }

// console.log(sum(1)(2,3,2)());

/************************************************************** */

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// function curry(fn) {
//   return function checkArgs(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...args2) {
//         return checkArgs(...args, ...args2);
//       };
//     }
//   };
// }

// const curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3, 4)); // 10
// console.log(curriedSum(1, 2, 3)(4)); // 10
// console.log(curriedSum(1)(2)(3)(4)); // 10

/****************************************************************** */

function Sum(...args) {
  const storage = [...args];

  const helper = function (...args) {
    storage.push(...args);
    return helper;
  };

  
  helper.valueOf = function() {
    return storage.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  };
  helper.value =  helper.valueOf

//   this.value = helper.valueOf
  return helper;
}

console.log(Sum(1, 2, 2)(2)(3).value());
console.log(Sum(1,2).value());
console.log(Sum(1) + 2);

console.log(Sum.prototype);