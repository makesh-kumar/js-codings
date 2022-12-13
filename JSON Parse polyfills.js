class MyJSON {
  static parse(str) {
    switch (str) {
      case undefined:
        throw new Error();
      case 'null':
        return null;
      case 'true':
        return true;
      case 'false':
        return false;
    }
    if(str === "''" || str.length === 0 || str.startsWith("'")) {
      throw new Error('Invalid string in JSON');
    } 
    if(str === '""') {
      return "";
    }
    if (str.startsWith('"')) {
      if (str.charAt(1) === '"') {
        throw new Error('Invalid string in JSON');
      }
      return str.slice(1, -1);
    }
    if (!isNaN(str)) {
      return Number(str);
    }
  
    if (str.startsWith('{')) {
     const propWithValues = this.prototype.getCommaSeparatedPairs(str);
      const obj = {};
      for (const propWithValue of propWithValues) {
        const index = propWithValue.indexOf(':');
        const prop = propWithValue.substring(0, index);
        const value = propWithValue.substring(index + 1);
        obj[this.parse(prop)] = this.parse(value);
      }
      return obj;
    } else if (str.startsWith('[')) {
      const values = this.prototype.getCommaSeparatedPairs(str);
      const arr = [];
      for (const value of values) {
        arr.push(this.parse(value));
      }
      return arr;
    } else {
      throw new Error('')
    }
  } 

   getCommaSeparatedPairs(str) {
    str = str.slice(1, -1);
    let startFrom = 0;
    let commaSeparatedPairs = [];
    let noOfCurlyBracesOpen = 0;
    let noOfSqrBracketOpen = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (char === '{') {
        noOfCurlyBracesOpen++;
      }
      if (char === '[') {
        noOfSqrBracketOpen++;
      }
      if (char === '}') {
        noOfCurlyBracesOpen--;
      }
      if (char === ']') {
        noOfSqrBracketOpen--;
      }
      if (char === ',' && noOfCurlyBracesOpen===0 && noOfSqrBracketOpen === 0) {
        commaSeparatedPairs.push(str.substring(startFrom, i));
        startFrom = i + 1;
      } else if (i === str.length - 1) {
        commaSeparatedPairs.push( str.substring(startFrom, i + 1));
      }
    }
    return commaSeparatedPairs;
  }
}





let obj = { 
  a: true, 
  b: 100,
  c: 'c', 
  d: [1,2,3, {
    e: ['f']
  }],
  g: {
    h:'i'
  }
}


const str = JSON.stringify(obj);
console.log(JSON.parse(str));
console.log(MyJSON.parse(str));
