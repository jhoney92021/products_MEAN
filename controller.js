//BRINGS STUFF FROM models.js
const Product = require("./models");
//BRINGS STUFF FROM models.js
//STUFF TO EXPORT TO routes.js
module.exports = {
    
    //Product 'dashboard'
    index: (request, response) => {
        console.log(`***********hit get all***********`)
        Product.find()
        .then(t => {
            response.json(t);
        })
        .catch(err => response.json(err))
    },
    //Product 'dashboard'
    //create product
    create: (request, response) => {
        console.log(`***********hit create***********`)
        console.log(`***********${JSON.stringify(request.body)}***********`)
        Product.create(request.body) 
        .then(t =>{
            response.json(t);
        })
        .catch(err => response.json(err))
    },
    //create product
    //update product
    update: (request, response) => {
        console.log(`***********hit update***********`)
        console.log(`***********${JSON.stringify(request._id)}***********`)
        console.log(`***********${JSON.stringify(request.body)}***********`)
        Product.findByIdAndUpdate(request._id,request.body) 
            .then(t =>{
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //update product
    //delete 1
    delete: (request, response) => {
        Product.remove({ _id: request.params._id }) 
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //delete 1
    //read 1
    view: (request, response) => {
        Product.findOne({ _id: request.params._id })
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //read 1
}
//STUFF TO EXPORT TO routes.js