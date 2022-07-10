function curry(...num1) {
  return function (...num2) {
    if (num2.length) {
      return curry(
        [...num1, ...num2].reduce((acc, res) => {
          return acc + res;
        }, 0)
      );
    } else {
      return num1.reduce((acc, res) => {
        return acc + res;
      }, 0);
    }
  };
}

let res = curry(1, 2, 6)();

console.log(res);
