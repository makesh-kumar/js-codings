const input = {
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

// function deepFlatten(input,res,prefix = '') {
//     for(key in input) {
//         flatObj(key, input[key],res);
//     }
//     function flatObj(key, val, res) {
//         if(val.constructor.name === 'Object' || val.constructor.name === 'Array') {
//             deepFlatten(val,res,prefix+key+".");
//         } else {
//             res[prefix+key] = val;
//         }
//     }
//     return res;
// }

function deepFlatten(input, prefix = '') {
  let res = {};
  for (key in input) {
    flatObj(key, input[key]);
  }
  function flatObj(key, val) {
    if (val.constructor.name === 'Object' || val.constructor.name === 'Array') {
      res = { ...res, ...deepFlatten(val, prefix + key + '.') };
    } else {
      res[prefix + key] = val;
    }
  }
  return res;
}

console.log(deepFlatten(input));
