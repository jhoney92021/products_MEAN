//REQUIRED
const mongoose = require('mongoose');
//REQUIRED

//CONNECT
mongoose.connect('mongodb://localhost/product', {useNewUrlParser: true});
//CONNECT

//SCHEMAS
//Product
var ProductSchema = new mongoose.Schema({
    title: {type: String,
            required: true,
            minlength:[3,"title must be longer than 3 letters"],
            maxlength:[20, "title to long, be more brief"]},
    price: {type: Number, 
            required: true, 
            min:[0,"price must be more than 0"],
            max:[1000,"too expensive!!!!"],
            default:0},
    image: {type: String, 
                required:false, 
                default:"an image could go here"}
}, { timestamps: true });
//Product
//SCHEMAS


//MODEL
const Product = mongoose.model('Product', ProductSchema);
//MODEL
//STUFF TO EXPORT TO controller.js
module.exports = Product;
//STUFF TO EXPORT TO controller.js
