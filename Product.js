class Product {
  constructor(length, width, height, weight) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.weight = weight;
  }

  getLength() {
    return this.length;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }
}

module.exports = { Product };
