/*
/!**
 * Created by princya on 22/10/18.
 *!/

const scheduler = require('node-schedule')

var schedulerJob = scheduler.scheduleJob('1 * * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
});

module.exports = schedulerJob;*/
