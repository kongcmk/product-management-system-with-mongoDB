const { default: mongoose } = require("mongoose");
// const uuid4 = require('uuid4');


const productSchema = mongoose.Schema({

    id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    created_at: {
        type: String,
        default: Date.now
    },
    updated_at: {
        type: String,
        default: null
    }
});

const Product =  mongoose.model('Product', productSchema);

module.exports = Product;