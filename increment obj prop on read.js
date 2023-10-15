let obj = {
  a: 0,
};

obj = new Proxy(obj, {
  get: (target, prop) => {
    if (prop === 'a') {
      target[prop] = target[prop] + 1;
    }
    return target[prop];
  },
});

console.log(obj.a); // 1
console.log(obj.a); // 2
console.log(obj.a); // 3
console.log(obj.a); // 4
console.log(obj.a); // 5
