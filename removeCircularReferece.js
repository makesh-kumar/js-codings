let obj1 = {
  value: 100,
  next: null,
};

let obj2 = {
  value: 200,
  next: null,
};

let obj3 = {
  value: 300,
  next: null,
};

obj1.next = obj2;
obj2.next = obj3;
obj3.next = obj1;

function removeCircularRef(obj) {
  const store = new WeakSet();

  function helper(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          if (store.has(obj[key])) {
            obj[key] = null;
          } else {
            store.add(obj[key]);
            helper(obj[key]);
          }
        }
      }
    }
  }
  helper(obj)
}

// console.log(obj1);
removeCircularRef(obj1);
console.log(obj1);

console.log(JSON.stringify(obj1));
