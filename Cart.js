const { BlackCat } = require('./BlackCat.js');
const { Hsinchu } = require('./Hsinchu.js');
const { PostOffice } = require('./PostOffice.js');

class Cart {
  constructor() {
    this.shippers = {
      'black cat': new BlackCat(),
      'hsinchu': new Hsinchu(),
      'post office': new PostOffice(),
    };
  }

  shippingFee(shipperName, product) {
    if (this.shippers.hasOwnProperty(shipperName)) {
      return this.shippers[shipperName].calculateFee(product);
    }
    throw new Error('shipper not exist');
  }
}

module.exports = { Cart };
