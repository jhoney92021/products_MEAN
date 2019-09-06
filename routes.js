//BRINGS STUFF FROM controller.js
const controller = require("./controller");
//BRINGS STUFF FROM controller.js

//STUFF TO EXPORT TO server.js
module.exports = function(app){
    app.get('/product', controller.index)/*get all*/
    app.post('/product', controller.create)/*make product*/
    app.patch('/product/:_id', controller.update)/*update product*/
    app.delete('/product/:_id', controller.delete)/*delete one*/
    app.get('/product/:_id', controller.view)/*view one*/
}
//STUFF TO EXPORT TO server.js