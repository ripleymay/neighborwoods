const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    species: {
        type: String,
        required: true,
    },
    stature: {
        type: String,
        required: true,
        enum: ['Small', 'Medium', 'Large']
    },
    description: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        required: true,
        default: false
    }
}, {  
    timestamps: true,
});

module.exports = mongoose.model('Tree', treeSchema);