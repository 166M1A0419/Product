const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  productId: {
    type: Number
  },
  productName: {
    type: string
  },
  qtyPerUnit: {
    type: string
  },
  unitPrice: {
    type: Number
  },
  unitInStock: {
    type: string
  },
  discontinued: {
    type: Boolean
  },
  categoryId: {
    type: Number
  },
  
}, {
    collection: 'product'
  })

module.exports = mongoose.model('product', productSchema)