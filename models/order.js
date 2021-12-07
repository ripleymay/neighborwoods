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

orderSchema.statics.checkDupes = function(addy) {
    //'this' is the Order model
    const yearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString();
    return this.find({address: addy, createdAt: {$gte: yearAgo}});
}

module.exports = mongoose.model('Order', orderSchema);