const obj = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const filter = (n) => n >= 0;

// const obj = {
//   a: 1,
//   b: {
//     c: 'Hello world',
//     d: 2,
//     e: {
//       f: {
//         g: -4,
//       },
//     },
//     h: 'Good Night',
//   },
// };

// const filter = (s) => typeof s === 'string';

// manipulating same object (in-place)
// function deepFilter(obj, fn) {
//   for (const key in obj) {
//     const val = obj[key];
//     if (val.constructor.name === 'Object') {
//       let filtered = deepFilter(val, fn);
//       if (Object.keys(filtered).length) {
//         obj[key] = filtered;
//       } else {
//         delete obj[key];
//       }
//     } else {
//       if (!fn(val)) {
//         delete obj[key];
//       }
//     }
//   }
//   return obj;
// }



// manipulating with new object
function deepFilter(obj, fn) {
  const res = {};
  for (const key in obj) {
    const val = obj[key];
    if (val.constructor.name === 'Object') {
      let filtered = deepFilter(val, fn);
      if (Object.keys(filtered).length) {
        res[key] = filtered;
      }
    } else {
      if (fn(val)) {
        res[key] = val;
      }
    }
  }
  return res;
}

console.log(deepFilter(obj, filter));
