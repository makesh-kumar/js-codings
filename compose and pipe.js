function addThree(num) {
  return num + 3;
}

function addFour(num) {
  return num + 4;
}

function addFive(num) {
  return num + 5;
}

function compose(...fns) {
  return function (inp) {
    let arg = inp;
    for (let i = 0; i < fns.length; i++) {
      arg = fns[i](arg);
    }
    return arg;

    // return fns.reduce((acc, res) => {
    //   return res(acc);
    // }, inp);
  };
}

function pipe(...fns) {
  return function (inp) {
    // const arg = inp;
    // for (let i = fns.length - 1; i >= 0; i--) {
    //   arg = fns[i](arg);
    // }
    // return arg;

    return fns.reduceRight((acc, res) => {
      return res(acc);
    }, inp);
  };
}

console.log(pipe(addThree, addFour)(1));
console.log(compose(addThree, addFour)(1));
