class Cart {
  constructor() {
  }

  shippingFee(shipper, length, width, height, weight) {
    switch (shipper) {
      case "black cat":
        if (weight > 20) {
          return 500;
        }
        return 100 + weight * 10;
      case "hsinchu":
        const size = length * width * height;
        if (length > 100 || width > 100 || height > 100) {
          return size * 0.00002 * 1100 + 500;
        }
        return size * 0.00002 * 1200;
      case "post office":
        const feeByWeight = 80 + weight * 10;
        const _size = length * width * height;
        const feeBySize = _size * 0.00002 * 1100;
        return feeByWeight < feeBySize ? feeByWeight : feeBySize;
      default:
        throw new Error('shipper not exist');
    }
  }
}

module.exports = { Cart };
