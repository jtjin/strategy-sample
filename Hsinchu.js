const { Shipper } = require('./Shipper');

class Hsinchu extends Shipper {
  constructor() {
    super();
  }

  calculateFee(product) {
    if (product.getLength() > 100 || product.getWidth() > 100 || product.getHeight() > 100) {
      return product.getSize() * 0.00002 * 1100 + 500;
    }
    return product.getSize() * 0.00002 * 1200;
  }
}

module.exports = { Hsinchu };
