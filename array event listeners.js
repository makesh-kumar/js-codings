Array.prototype.listeners = {};

Array.prototype.addEventListener = function (eventName, fn) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName] = [...this.listeners[eventName], fn];
};

Array.prototype.triggerEvent = function (eventName, args, arr) {
  if (this.listeners[eventName]) {
    for (const fn of this.listeners[eventName]) {
      fn(eventName, args, arr);
    }
  }
};
const originalPush = Array.prototype.push;
Array.prototype.push = function (...args) {
  originalPush.call(this, ...args);
  this.triggerEvent('add', args, this);
};

const originalPop = Array.prototype.pop;
Array.prototype.pop = function (...args) {
  let removedVal = originalPop.call(this, ...args);
  this.triggerEvent('remove', removedVal, this);
};

let arr = [];

arr.addEventListener('add', (eventName, val, arr) => {
  console.log(val + ' is added');
});

arr.addEventListener('add', (eventName, val, arr) => {
  console.log(val + ' IS ADDED');
});

arr.addEventListener('remove', (eventName, val, arr) => {
  console.log(val + ' is removed');
});

arr.push(1);
arr.push(18);

arr.pop();
