function BrowserHistory() {
  this.history = [];
  this.index = -1;

  this.visit = function (url) {
    this.history[++this.index] = url;
    this.history.length = this.index + 1;
  };

  this.current = function () {
    if (this.index < 0) {
      return 'Blank page';
    }

    return this.history[this.index];
  };

  this.forward = function () {
    this.index = Math.min(this.history.length - 1, ++this.index);
  };

  this.backward = function () {
    this.index = Math.max(-1, --this.index);
  };
}

const history = new BrowserHistory();

console.log(history.current());
history.backward();

history.visit('A');
history.visit('B');
history.visit('C');
history.backward();
// history.backward();
// history.forward()
// history.forward()

history.visit('D');
history.backward();

// history.backward();/

history.backward();

console.log(history.current());
