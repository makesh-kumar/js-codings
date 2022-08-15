Array.prototype.myAt = function (index) {
  index = Math.floor(index);
  if (!Number(index)) {
    return this[0];
  } else if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
};

Array.prototype.myConcat = function (...args) {
  let res;
  res = [...this];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      res.push(...args[i]);
    } else {
      res.push(args[i]);
    }
  }
  return res;
};

Array.prototype.myCopyWithin = function (index, start, end) {
  start = start ?? 0;
  end = end ?? this.length - 1;
  const partToCopy = this.slice(start, end);
  this.splice(index, partToCopy.length, ...partToCopy);
  return this;
};

Array.prototype.myEntries = function () {
  function* gen() {
    for (let i = 0; i < this.length; i++) {
      yield [i, this[i]];
    }
  }
  return gen.call(this);
};

Array.prototype.myEvery = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

Array.prototype.myFill = function (value, start, end) {
  start = start ?? 0;
  end = end ?? this.length;

  start = start >= 0 ? start : this.length + start;
  end = end >= 0 ? end : this.length + end;

  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

Array.prototype.myFilter = function (fn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      return this[i];
    }
  }
};

Array.prototype.myFindIndex = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myFindLast = function (fn) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (fn(this[i], i, this)) {
      return this[i];
    }
  }
};
Array.prototype.myFindLastIndex = function (fn) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (fn(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

Array.prototype.myIncludes = function (value, start) {
  start = start ?? 0;
  start = start >= 0 ? start : this.length + start;
  for (let i = start; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

Array.prototype.myIndexOf = function (value, start) {
  start = start ?? 0;
  start = start >= 0 ? start : this.length + start;
  for (let i = start; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myJoin = function (separator) {
  separator = separator ?? ",";
  let res = "";
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] ?? "";
    res = res + this[i] + separator;
  }
  return separator === "" ? res : res.slice(0, res.length - 1);
};

Array.prototype.myKeys = function () {
  function* keyGen() {
    for (let i = 0; i < this.length; i++) {
      yield i;
    }
  }
  return keyGen.call(this);
};

Array.prototype.myLastIndexOf = function (val, start) {
  start = start ?? this.length - 1;
  start = start >= 0 ? start : start + this.length;
  for (let i = start; i >= 0; i--) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myMap = function (fn) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

Array.prototype.myPop = function () {
  return this.splice(this.length - 1)[0];
};

Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length;
};
Array.prototype.myShift = function () {
  return this.splice(0, 1)[0];
};

Array.prototype.mySome = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

Array.prototype.myUnshift = function (...args) {
  this.splice(0, this.length, ...[...args, ...this]);
  return this.length;
};

Array.prototype.myReverse = function () {
  const arr = [...this];
  const len = this.length;
  for (let i = 0; i < this.length; i++) {
    const index = len - i;
    this[i] = arr[index - 1];
  }
  return this;
};

Array.prototype.myReduce = function (fn, initialVal) {
  let res = initialVal;
  for (let i = 0; i < this.length; i++) {
    res = fn(res, this[i], i, this);
  }
  return res;
};
Array.prototype.myReduceRight = function (fn, initialVal) {
  let res = initialVal ?? 0;
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i]) {
      res = fn(res, this[i], i, this);
    }
  }
  return res;
};

Array.prototype.mySlice = function (start, end) {
  const res = [];

  start = start ?? 0;
  end = end ?? this.length;

  start = start >= 0 ? start : this.length + start;
  start = start >= 0 ? start : 0;

  end = end >= 0 ? end : this.length + end;
  if (end > this.length) {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    res.push(this[i]);
  }
  return res;
};

/**
 * flat, flatMap, slice, splice, values, toString, toLocaleString
 */

Array.prototype.mySplice = function (start, noOfVal, ...fillers) {
  let removedItems = [];
  let arr = this;
  start = start >= 0 ? start : this.length + start;

  if (start > this.length) {
    start = this.length;
  }
  noOfVal = noOfVal ?? this.length;

  for (let i = start; i < start + noOfVal; i++) {
    removedItems.push(this[i]);
    delete this[i];
  }

  return removedItems;
};

Array.prototype.myFlat = function (depth = 1) {
  const res = [];
  noOfDepthCompleted = 0;

  function flatIt(arr, depth) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].constructor.name === "Array") {
        if (this.noOfDepthCompleted <= depth) {
          this.noOfDepthCompleted++;
          temp.push(...flatIt(arr[i], depth - 1));
        } else {
          temp.push(arr[i]);
        }
      } else {
        temp.push(arr[i]);
      }
    }
    noOfDepthCompleted = 0;

    return temp;
  }
  return flatIt(this, depth);
};

let arr = [
  1,
  2,
  3,
  [55, [77], [88, [99, 100, [101]]]],
  [4, 5, [6]],
  [7, 8, [9]],
  [100, [1]],
];

console.log(arr.flat());

console.log(arr.myFlat());

Array.prototype.myFlatMap = function (fn) {
  const mappedResult = [];
  for (let i = 0; i < this.length; i++) {
    mappedResult.push(fn(this[i]));
  }
  return mappedResult.myFlat();
};
const arr1 = ["it's Sunny in", "", "California"];

console.log(arr1.map((x) => x.split(" ")));
console.log(arr1.flatMap((x) => x.split(" ")));
console.log(arr1.myFlatMap((x) => x.split(" ")));
