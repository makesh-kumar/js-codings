class Subject {
  callbackList = [];
  constructor() {
    this.callbackList = [];
  }

  subscribe(fn) {
    this.callbackList.push(fn);

    const callbackList = this.callbackList;
    const callbackId = this.callbackList.length - 1;
    return {
      unsubscribe: function () {
        callbackList.splice(callbackId, 1);
      },
    };

    // return {
    //   callbackList: this.callbackList,
    //   callbackId: this.callbackList.length - 1,
    //   unsubscribe: function () {
    //     this.callbackList.splice(this.callbackId, 1);
    //   },
    // };
  }

  next(val) {
    for (const fn of this.callbackList) {
      fn(val);
    }
  }
}

const sub1 = new Subject();
let u1 = sub1.subscribe((val) => {
  console.log('V111 - ', val);
});

// const sub2 = new Subject();
let u2 = sub1.subscribe((val) => {
  console.log('V22 - ', val);
});

sub1.next(19);
console.log(u2.unsubscribe());
sub1.next(19);
