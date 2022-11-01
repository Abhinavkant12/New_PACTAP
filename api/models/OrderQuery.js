const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const orderQuerySchema = new Schema({
    creation_date: { type: Date, default: new Date() },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, default: "PENDING" },
    artwork: { type: Array },
    productCategory: { type: String, required: true },
    specialInstructions: { type: String },
    quantity: { type: Number },
    query: { type: Object },
    assignVendor: { type: Array },
    assignVendorOn: { type: Date },
    vendorQuotes: { type: Array },

});
module.exports = mongoose.model('OrderQuery', orderQuerySchema);