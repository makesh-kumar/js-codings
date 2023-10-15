const btn = document.querySelector('#btn');

const handleClick = (e) => {
  console.log('Clicked....', e);
};

const throttleWithLeadingCount = (fn, count) => {
  let noOfTimesInvoked = count;
  return function (...args) {
    if (noOfTimesInvoked === count) {
      fn.call(this, ...args);
      noOfTimesInvoked = 0;
    } else {
      noOfTimesInvoked++;
    }
  };
};

const throttleWithTrailingCount = (fn, count) => {
  let noOfTimesInvoked = 0;
  return function (...args) {
    if (noOfTimesInvoked === count) {
      fn.call(this, ...args);
      noOfTimesInvoked = 0;
    } else {
      noOfTimesInvoked++;
    }
  };
};

const throttleWithLeadingTime = (fn, delayInMs) => {
  let timer = null;
  return function (...args) {
    if (timer === null) { // when invoked for first time
      fn.call(this, ...args);
      timer = Date.now() + delayInMs;
    } else if (Date.now() > timer) {
      fn.call(this, ...args);
      timer = Date.now() + delayInMs;
    }
  };
};

const throttleWithTrailingTime = (fn, delayInMs) => {
  let timer = null;
  return function (...args) {
    if (timer === null) { // when invoked for first time
      timer = Date.now() + delayInMs;
    } else if (Date.now() > timer) {
      fn.call(this, ...args);
      timer = Date.now() + delayInMs;
    }
  };
};

btn.addEventListener('click', throttleWithTrailingCount(handleClick, 3));
