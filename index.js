/**
 * Created by princya on 22/10/18.
 */
const express = require('express');
let app = express();
const port = 3000;
const data = require('./src/data');

app.use('/api', data)
app.use('/', (req, res) => {
    res.send("Welcome! Scheduler Service..")
});

let server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Scheduler is listening on host ${host} port ${port}`)
});



