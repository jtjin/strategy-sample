class BlackCat {
  constructor() {
  }

  calculateFee(product) {
    if (product.getWeight() > 20) {
      return 500;
    }
    return 100 + product.getWeight() * 10;
  }
}

module.exports = { BlackCat };
