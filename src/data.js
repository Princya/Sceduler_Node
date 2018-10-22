/**
 * Created by princya on 22/10/18.
 */
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json())

router.use(bodyParser.urlencoded({
    extended: false
}));

router.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Content-Type', 'application/json');
    next();
});

router.get('/data', (req, res) => {
    res.send(printValue())
})

const printValue = () => {
    var data = [];
    for(var i = 0; i<=50; i++){
        console.log('hello'+i);
        data.push('hello'+i);
    }
    return data;
}
module.exports = router;
