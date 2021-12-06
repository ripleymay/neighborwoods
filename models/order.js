const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    type: {
        type: String,
        required: true,
        enum: ['Residential', 'Community Group'],
        default: 'Residential'
    },
    status: {
        type: String,
        required: true,
        enum: ['Submitted', 'Approved', 'Delivered'],
        default: 'Submitted'
    },
    address: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true,
    },
    lng: {
        type: String,
        required: true,
    },
    trees: [{type: Schema.Types.ObjectId, ref: 'Tree'}]
}, {  
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);