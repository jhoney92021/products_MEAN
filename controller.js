//BRINGS STUFF FROM models.js
const Product = require("./models");
//BRINGS STUFF FROM models.js
//STUFF TO EXPORT TO routes.js
module.exports = {    
    //Product 'dashboard'
    index: (request, response) => {
        Product.find()
        .then(data => {
            response.json(data);
        })
        .catch(err => response.json(err))
    },
    //Product 'dashboard'
    //create product
    create: (req, res) => {
        Product.create(req.body) 
        .then(d =>{
            response.json(d);
        })
        .catch(err => res.json(err))
    },
    //create product
    //update product
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params._id,req.body) 
            .then(d =>{
                response.json(d);
            })
            .catch(err => res.json(err))
    },
    //update product
    //delete 1
    delete: (req, res) => {
        Product.remove({ _id: req.params._id }) 
            .then(d => {
                res.json(d);                
            })
            .catch(err => res.json(err))
    },
    //delete 1
    //read 1
    view: (req, res) => {
        Product.findOne({ _id: req.params._id })
            .then(d => {
                response.json(d);                
            })
            .catch(err => res.json(err))
    },
    //read 1
}
//STUFF TO EXPORT TO routes.js