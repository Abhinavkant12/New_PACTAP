const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const itemsSchema = new Schema({
    itemCode: { type: Number, required: false },
    itemName: { type: String, required: true },
    itemGroup: { type: String, required: true },
    uom: { type: String, required: true },
    itemCategory: { type: String, required: true },
    creation_date: { type: Date, default: new Date() }
});
module.exports = mongoose.model('Items', itemsSchema);