let obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

function pipe(obj) {
  return function (...args) {
    let helper = function (obj) {
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          helper(obj[key]);
        }
        if (typeof obj[key] === 'function') {
          obj[key] = obj[key](...args);
        }
      }
    };
    helper(obj);
  };
}

pipe(obj)(1, 1, 1);

console.log(obj);
