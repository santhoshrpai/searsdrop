'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  partnumber: String,
  productlink: String,
  shortdescription: String,
  price: Number,
  rating:Number,
  mainimageurl: String,
  category: String
});

module.exports = mongoose.model('Product', ProductSchema);