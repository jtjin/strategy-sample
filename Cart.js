class Cart {
  constructor() {
  }

  shippingFee(shipper, product) {
    switch (shipper) {
      case 'black cat':
        return this.calculateFeeByBlackCat(product);
      case 'hsinchu':
        if (product.getLength() > 100 || product.getWidth() > 100 || product.getHeight() > 100) {
          return product.getSize() * 0.00002 * 1100 + 500;
        }
        return product.getSize() * 0.00002 * 1200;
      case 'post office':
        const feeByWeight = 80 + product.getWeight() * 10;
        const feeBySize = product.getSize() * 0.00002 * 1100;
        return Math.min(feeByWeight, feeBySize);
      default:
        throw new Error('shipper not exist');
    }
  }

  calculateFeeByBlackCat(product) {
    if (product.getWeight() > 20) {
      return 500;
    }
    return 100 + product.getWeight() * 10;
  }
}

module.exports = { Cart };
