class PostOffice {
  constructor() {
  }

  calculateFee(product) {
    const feeByWeight = 80 + product.getWeight() * 10;
    const feeBySize = product.getSize() * 0.00002 * 1100;
    return Math.min(feeByWeight, feeBySize);
  }
}

module.exports = { PostOffice };
