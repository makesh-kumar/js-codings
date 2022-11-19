class MyJSON {
  static stringify(input) {
    if (input === null || input === undefined) {
      return input === null ? "null" : input;
    }
    const type = input.constructor.name;
    switch (type) {
      case "String":
        return this.prototype.stringifyString(input);
      case "Number":
        return this.prototype.stringifyNumber(input);
      case "Boolean":
        return this.prototype.stringifyBoolean(input);
      case "Array":
        return this.prototype.stringifyArray(input);
      case "Function":
        return undefined;
      case "Object":
        return this.prototype.stringifyObject(input);
    }
  }

  stringifyNumber(num) {
    return num.toString();
  }

  stringifyString(str) {
    return `"${str}"`;
  }

  stringifyBoolean(bool) {
    return bool.toString();
  }

  stringifyArray(arr) {
    let res = "[";
    for (let index = 0; index < arr.length; index++) {
      const val = arr[index];
      if (
        val === null ||
        val === undefined ||
        val?.constructor.name === "Function"
      ) {
        res = res + null;
      }
      res = this.stringifyValues(val, res);
      if (index < arr.length - 1) {
        res = res + ",";
      }
    }
    res = res + "]";
    return res;
  }

  stringifyObject(obj) {
    const keys = Object.keys(obj);
    let res = "{";
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const val = obj[key];
      if (val === undefined || val?.constructor.name === "Function") {
        if (index === keys.length - 1 && keys.length > 1) {
          res = res.slice(0, res.length - 1);
        }
        continue;
      }
      res = res + this.stringifyString(key);
      res = res + ":";
      if (val === null) {
        res = res + val;
      }
      res = this.stringifyValues(val, res);
      if (index < keys.length - 1) {
        res = res + ",";
      }
    }
    res = res + "}";
    return res;
  }

  stringifyValues(val, res) {
    if (val) {
      const type = val.constructor.name;
      switch (type) {
        case "Number":
          res = res + this.stringifyNumber(val);
          break;
        case "String":
          res = res + this.stringifyString(val);
          break;
        case "Boolean":
          res = res + this.stringifyBoolean(val);
          break;
        case "Array":
          res = res + this.stringifyArray(val);
          break;
        case "Object":
          res = res + this.stringifyObject(val);
          break;
      }
    }
    return res;
  }
}

const obj = {
  a: 100,
  b: "John",
  c: true,
  d: [1, 2, 3, {}],
  e: {
    age: 25,
    skills: [
      "js",
      01,
      {
        percentage: "100%",
        rating: [null, undefined],
      },
    ],
    others: null,
    extra: undefined,
  },
  f: null,
  g: undefined,
};

console.log(JSON.stringify(obj) === MyJSON.stringify(obj)); // true
