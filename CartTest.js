const { assert } = require('chai');
const { Cart } = require('./Cart.js');
const { Product } = require('./Product.js');

const cart = new Cart();
const blackCat = 'black cat';
const hsinchu = 'hsinchu';
const postOffice = 'post office';

describe('Cart Test', () => {
  it('black cat with light weight', () => {
    const shippingFee = cart.shippingFee(blackCat, new Product(30, 20, 10, 5));
    assert.equal(150, shippingFee);
  });
  it('black cat with heavy weight', () => {
    const shippingFee = cart.shippingFee(blackCat, new Product(30, 20, 10, 50));
    assert.equal(500, shippingFee);
  });
  it('hsinchu with small size', () => {
    const shippingFee = cart.shippingFee(hsinchu, new Product(30, 20, 10, 50));
    assert.equal(144, shippingFee);
  });
  it('hsinchu with huge size', () => {
    const shippingFee = cart.shippingFee(hsinchu, new Product(100, 20, 10, 50));
    assert.equal(480, shippingFee);
  });
  it('post office by weight', () => {
    const shippingFee = cart.shippingFee(postOffice, new Product(100, 20, 10, 3));
    assert.equal(110, shippingFee);
  });
  it('post office by size', () => {
    const shippingFee = cart.shippingFee(postOffice, new Product(100, 20, 10, 300));
    assert.equal(440, shippingFee);
  });
});
