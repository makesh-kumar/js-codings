function computeAmount() {
    function crores(val) {
      this.c += val;
      return this;
    }
  
    function lacs(val) {
      this.l += val;
      return this;
    }
  
    function thousands(val) {
      this.t += val;
      return this;
    }
  
    function amount() {
      let totalCrore = this.c * 10000000;
      let totalLacs = this.l * 100000;
      let totalThousand = this.t * 1000;
      console.log(totalCrore + totalLacs + totalThousand);
    }
  
    let obj = {
      c: 0,
      t: 0,
      l: 0,
      crores: crores,
      lacs: lacs,
      thousands: thousands,
      value: amount,
    };
  
    return obj;
  }
  
  computeAmount()
    .lacs(15)
    .crores(5)
    .crores(2)
    .lacs(20)
    .thousands(45)
    .crores(7)
    .value();
  