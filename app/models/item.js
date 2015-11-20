var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  // id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  quantity: { type: Number, required: false },
  location: { type: String, required: false },
  brand: { type: String, required: false },
  price: { type: String, required: false },
  date_added: { type: Date, required: false }
});

module.exports = mongoose.model('Item', ItemSchema);
