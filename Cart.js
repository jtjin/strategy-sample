const { BlackCat } = require('./BlackCat.js');
const { Hsinchu } = require('./Hsinchu.js');
const { PostOffice } = require('./PostOffice.js');

class Cart {
  constructor() {
    this.blackCat = new BlackCat();
    this.hsinchu = new Hsinchu();
    this.postOffice = new PostOffice();
  }

  shippingFee(shipper, product) {
    switch (shipper) {
      case 'black cat':
        return this.blackCat.calculateFee(product);
      case 'hsinchu':
        return this.hsinchu.calculateFee(product);
      case 'post office':
        return this.postOffice.calculateFee(product);
      default:
        throw new Error('shipper not exist');
    }
  }
}

module.exports = { Cart };
