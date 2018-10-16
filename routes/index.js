var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/ok', function(req, res, next) {
    res.send('ok');
});
//测试查询
router.get('/find', function(req, res, next) {
    db.testModel.find(function (err, findRes) {
        if (err){
            return console.error(err);
        }else{
            // console.log('res',findRes)
            res.send(200,{
                msg: 'ok',
                data: findRes
            });
        }
    });
});
//测试添加
router.post('/add', function(req, res) {
    db.add(req.body);
    // console.log(req.query);
    // console.log(req.body);
    res.send('ok');
});
//获取一级菜单
router.get('/getMenu', function(req, res, next) {
    db.menuModel.aggregate(function (err, findRes) {
        if (err){
            return console.error(err);
        }else{
            // console.log('res',findRes)
            res.send(200,{
                msg: 'ok',
                data: findRes
            });
        }
    });
});
//获取菜单
router.get('/getMenuAll', function(req, res, next) {
    db.menuModel.find(function (err, findRes) {
        if (err){
            return console.error(err);
        }else{
            // console.log('res',findRes)
            res.send(200,{
                msg: 'ok',
                data: findRes
            });
        }
    });
});
//获取订单列表
router.get('/getOrders', function(req, res, next) {
    db.orderModel.find(function (err, findRes) {
        if (err){
            return console.error(err);
        }else{
            // console.log('res',findRes)
            res.send(200,{
                msg: 'ok',
                data: findRes
            });
        }
    });
});
//添加订单
router.post('/addOrder', function(req, res) {
    db.addOrder(req.body);
    res.send('ok');
});


module.exports = router;
