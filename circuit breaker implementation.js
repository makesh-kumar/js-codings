// create a function, that will halt its exectuion for x seconds, if it is failed for y times

const circuitBreaker = (fn, threshold, failureCount) => {
  let failCount = 0;
  let isClosed = false;
  let lastFailedTime = 0;
  return function (...args) {
    if (isClosed) {
      if (Date.now() > lastFailedTime + threshold) {
        console.log('Circuit Opened...');
        isClosed = false;
      }
    }
    if (isClosed) {
      console.log('Circuit closed...');
      return;
    } else {
      try {
        const res = fn(...args);
        failCount = 0;
        console.log('Success...');
        return res;
      } catch (e) {
        console.log('Failed...');
        failCount++;
        if (failCount >= failureCount) {
          lastFailedTime = Date.now();
          isClosed = true;
          console.log('Circuit breaker enabled');
        }
      }
    }
  };
};

const test = () => {
  let count = 0;

  return () => {
    count++;
    if (true || count <= 3) {
      throw new Error();
    } else {
      return 'Makesh';
    }
  };
};

const waitFor = (timer) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

async function main() {
  let t = test();

  let c = circuitBreaker(t, 1000, 3);

  c();
  c();
  c();
  c();
  await waitFor(5000);
  c();
  c();
  c();
  c();
  c();
  c();
  c();

}

main();
