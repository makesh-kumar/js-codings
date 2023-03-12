function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('returned from CACHE');
      return cache[key];
    }
    const value = fn(...args);
    cache[key] = value;
    return value;
  };
}

function sum(a, b) {
  console.log('returned from FUNCTION');
  return a + b;
}
sum = memoize(sum);

console.log(sum(1, 2)); // returned from FUNCTION
console.log(sum(1, 2)); // returned from cache

console.log(sum(4, 2));
console.log(sum(6, 3));

