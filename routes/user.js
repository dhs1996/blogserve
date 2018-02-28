var user = require('../modles/userdata')
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/";
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app) {
    app.get('/user', function (req, res) {
        log('GET /card');
        Card.find(function(err, cards) {
            if (err) {
                res.json({info: 'error during find cards', error: err});
            };
            res.json({info: 'cards found successfully', data: cards});
        });
    });
}


module.exports = router