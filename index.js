/**
 * Created by princya on 22/10/18.
 */
const express = require('express');
let app = express();
const port = 3000;
const data = require('./src/data');
const scheduler = require('node-schedule')

app.use('/api', data)
app.use('/', (req, res) => {
    res.send("Welcome! Scheduler Service..")
});

let server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Scheduler is listening on host ${host} port ${port}`)
});

var schedulerJob = scheduler.scheduleJob('1 * * * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
    for(var i=0; i<1000000; i++){
        console.log("In schedular "+i);
    }
});

