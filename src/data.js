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
    var inner = [];
    for(var i = 0; i<=1000; i++){
       // console.log('hello'+i);
       /* for(var j = 0; j< 1000; i++){
            inner.push(j);
        }*/
        console.log("in data"+i);
        data.push('hello'+i);
    }
    console.log(data.length);
}
module.exports = router;
