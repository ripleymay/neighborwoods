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
        enum: ['Pending', 'Submitted', 'Approved', 'Delivered'],
        default: 'Pending'
    },
    address: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true,
        match: /[0-9]{5}/
    },
    trees: [{type: Schema.Types.ObjectId, ref: 'Tree'}]
}, {  
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);