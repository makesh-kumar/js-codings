const SDK = function () {
  this.logs = [];
  this.count = 1;

  this.addEvent = function (event) {
    this.logs.push(event);
  };

  this.wait = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });

  this.sendAnalytics = async function () {
    if (this.logs.length === 0) {
      return;
    }
    const currentEvent = this.logs.shift();

    try {
      await this.wait();
      console.log('Logged : ', currentEvent);
    } catch (err) {
      console.log('Failed : ', currentEvent);
      this.logs.unshift(currentEvent);
    } finally {
      this.count = this.count + 1;
      this.sendAnalytics();
    }
  };
};

const sdk = new SDK();

sdk.addEvent('Event 1');
sdk.addEvent('Event 2');
sdk.addEvent('Event 3');
sdk.addEvent('Event 4');
sdk.addEvent('Event 5');
sdk.addEvent('Event 6');
sdk.addEvent('Event 7');
sdk.addEvent('Event 8');
sdk.addEvent('Event 9');
sdk.addEvent('Event 10');

sdk.sendAnalytics();
