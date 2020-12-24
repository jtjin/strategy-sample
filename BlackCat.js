const { Shipper } = require('./Shipper');

class BlackCat extends Shipper {
  constructor() {
    super();
  }

  calculateFee(product) {
    if (product.getWeight() > 20) {
      return 500;
    }
    return 100 + product.getWeight() * 10;
  }
}

module.exports = { BlackCat };
