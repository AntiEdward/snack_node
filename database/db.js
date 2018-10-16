let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/runoob');

let Schema = mongoose.Schema;

//测试模型
// let testSchema = new mongoose.Schema({
//     name: String
// },{
//     collection: 'noob'
// });
// let testModel = mongoose.model('', testSchema);

//下单模型
let orderSchema = new Schema({
    name: String,
    order: Array,
    time: String
});
//菜单模型
let menuSchema = new Schema({
    type: String,
    type_id: Number,
    sub_type: String,
    sub_type_id: Number,
    name: String
});
let orderModel = mongoose.model('order', orderSchema);
let menuModel = mongoose.model('menu', menuSchema);

function find(){
    testModel.find(function (err, res) {
        if (err){
            return console.error(err);
        }else{
            console.log(res)
        }
    })
}
function add(data){
    let addData = new testModel({
        name: data.name
    })
    addData.save();
}

function addOrder(data){
    let addData = new orderModel({
        name: data.name,
        order: data.order,
        time: data.time
    })
    addData.save();
}

module.exports = {orderModel, menuModel, add, addOrder}
