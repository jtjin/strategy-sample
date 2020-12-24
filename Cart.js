const { BlackCat } = require('./BlackCat.js');
const { Hsinchu } = require('./Hsinchu.js');
const { PostOffice } = require('./PostOffice.js');
const { Shipper } = require('./Shipper.js');

class Cart {
  constructor() {
  }

  shippingFee(shipperName, product) {
    return this.getShipper(shipperName).calculateFee(product);
  }

  getShipper(shipperName) {
    let shipper = new Shipper();
    switch (shipperName) {
      case 'black cat':
        shipper = new BlackCat();
        break;
      case 'hsinchu':
        shipper = new Hsinchu();
        break;
      case 'post office':
        shipper = new PostOffice();
        break;
      default:
        throw new Error('shipper not exist');
    }
    return shipper;
  }
}

module.exports = { Cart };
