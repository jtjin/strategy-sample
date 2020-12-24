const { BlackCat } = require('./BlackCat.js');
const { Hsinchu } = require('./Hsinchu.js');
const { PostOffice } = require('./PostOffice.js');

class Cart {
  constructor() {
  }

  shippingFee(shipperName, product) {
    switch (shipperName) {
      case 'black cat':
        return new BlackCat().calculateFee(product);
      case 'hsinchu':
        return new Hsinchu().calculateFee(product);
      case 'post office':
        return new PostOffice().calculateFee(product);
      default:
        throw new Error('shipper not exist');
    }
  }
}

module.exports = { Cart };
