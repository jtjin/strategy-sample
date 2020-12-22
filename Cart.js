class Cart {
  constructor() {
  }

  shippingFee(shipper, product) {
    switch (shipper) {
      case 'black cat':
        if (product.getWeight() > 20) {
          return 500;
        }
        return 100 + product.getWeight() * 10;
      case 'hsinchu':
        const size = product.getLength() * product.getWidth() * product.getHeight();
        if (product.getLength() > 100 || product.getWidth() > 100 || product.getHeight() > 100) {
          return size * 0.00002 * 1100 + 500;
        }
        return size * 0.00002 * 1200;
      case 'post office':
        const feeByWeight = 80 + product.getWeight() * 10;
        const _size = product.getLength() * product.getWidth() * product.getHeight();
        const feeBySize = _size * 0.00002 * 1100;
        return Math.min(feeByWeight, feeBySize);
      default:
        throw new Error('shipper not exist');
    }
  }
}

module.exports = { Cart };
