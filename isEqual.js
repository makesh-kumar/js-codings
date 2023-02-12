function isEqual(...args) {
  function isTypeEqual(...args) {
    return args.every(
      (val) => val.constructor.name === args[0].constructor.name
    );
  }

  function isPrimitiveEqual(...args) {
    return args.every((val) => val === args[0]);
  }

  function isArrayEqual(...args) {
    for (let i = 0; i < args.length; i++) {
      if (!isTwoArrayEqual(args[0], args[i])) {
        return false;
      }
    }
    return true;
  }

  function isObjectEqual(...args) {
    for (let i = 1; i < args.length; i++) {
      if (!isTwoObjectEqual(args[0], args[i])) {
        return false;
      }
    }
    return true;
  }

  function isTwoArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    const matchedIndex = [];
    for (let i = 0; i < arr1.length; i++) {
      let isFound = false;
      for (let j = 0; j < arr2.length; j++) {
        if (isEqual(arr1[i], arr2[j]) && !matchedIndex.includes(j)) {
          matchedIndex.push(j);
          isFound = true;
          break;
        }
      }
      if (isFound) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function isTwoObjectEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (!isTwoArrayEqual(keys1, keys2)) {
      return false;
    }
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

  if (!isTypeEqual(...args)) {
    return false;
  }

  const type = args[0]?.constructor.name;
  switch (type) {
    case 'String':
    case 'Number':
    case 'Boolean':
      return isPrimitiveEqual(...args);
    case 'Array':
      return isArrayEqual(...args);
    case 'Object':
      return isObjectEqual(...args);
  }
}

const objA = {
  a: 1,
  b: -2,
  c: [{ d: 3, e: { f: 4 }, g: [5, 6, { h: 7 }] }],
};

const objB = {
  c: [{ e: { f: 4 }, g: [6, { h: 7 }, 5], d: 3 }],
  a: 1,
  b: -2,
};

console.log(isEqual(objA, objB)); //true

console.log(isEqual('a', 'A')); //false
console.log(isEqual(1, 1, 1, 1)); // true
console.log(isEqual(1, 1, 2, 1, 1)); // false

console.log(isEqual(true, 1)); // false
console.log(isEqual(true, true, true)); //true

console.log(isEqual([1, 2, 3], [3, 2, 1], [2, 1, 3])); //true
console.log(isEqual([1, 2, 'E'], [1, 2, 'e'])); // false
console.log(isEqual({ A: '1' }, { A: '1', B: 2 })); // false
