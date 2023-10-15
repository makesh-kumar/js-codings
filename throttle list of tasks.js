const throttle = (listOfTasks, count, cb) => {
  let startingIndex = 0;
  return function (...args) {
    const endingIndex = startingIndex + count;
    const valuesToProcess = listOfTasks.slice(startingIndex, endingIndex);
    valuesToProcess.forEach((value) => {
      cb(value);
    });
    startingIndex = endingIndex;
  };
};

const fn = throttle([1, 2, 3, 4, 5, 6], 2, (v) => {
  console.log(v);
});

const btn = document.querySelector('#btn');
btn.addEventListener('click',fn)

// fn();