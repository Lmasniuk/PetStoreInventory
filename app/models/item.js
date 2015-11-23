var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  // id: { type: Number, required: true },
  type: {type: String, required: true},
  name: { type: String, required: true },
  brand: { type: String, required: false },
  quantity: { type: Number, required: true },
  description: { type: String, required: false },
  location: { type: String, required: false },  
  date_added: { type: Date, required: false },
  tags: {type: Array, required: false}
});

/*
var ProductSchema = ItemSchema.extend({
	price: { type: String, required: true }
});

var AdminEquipmentSchema = ItemSchema.extend({
	techSupportContact: {type: String, required: true},
	condition: { type: String, required: true }
});


var AnimalSchema = ProductSchema.extend({
	color: { type: String, required: false},
	breed: { type: String, required: false}
});

var AccessorySchema = ProductSchema.extend({
	
});

var ConsumableSchema = ProductSchema.extend({
	expiryDate: { type: Date, required: true},
	breed: { type: String, required: false}
});

var ScannerSchema = AdminEquipmentSchema.extend({
	dataFormat: {type: String, required: true}
});

var ComputerSchema = AdminEquipmentSchema.extend({
	priveleges: {type: String, required: true}
});

var CardReaderSchema = AdminEquipmentSchema.extend({
	bank: {type: String, required: true}
});
*/
module.exports = mongoose.model('Item', ItemSchema);
/*
module.exports = mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('AdminEquipment', AdminEquipmentSchema);
*/