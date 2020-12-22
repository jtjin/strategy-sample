class Cart {
  constructor() {
  }

  shippingFee(shipper, length, width, height, weight) {
    if (shipper === 'black cat') {
      if (weight > 20) {
        return 500;
      }
      return 100 + weight * 10;
    } if (shipper === 'hsinchu') {
      const size = length * width * height;
      if (length > 100 || width > 100 || height > 100) {
        return size * 0.00002 * 1100 + 500;
      }
      return size * 0.00002 * 1200;
    } if (shipper === 'post office') {
      const feeByWeight = 80 + weight * 10;
      const size = length * width * height;
      const feeBySize = size * 0.00002 * 1100;
      return feeByWeight < feeBySize ? feeByWeight : feeBySize;
    }
    throw new Error('shipper not exist');
  }
}

module.exports = { Cart };