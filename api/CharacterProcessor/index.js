const entryProcessor = require('./entryProcessor');

module.exports = function(context, req) {
    context.log.info(`Request for new entry received by ${req.body.user}`)
    if (req.body.skills && req.body.user) {
        if (req.body.skills.every(skill => skill <= 120)) {
            context.log.info(`Valid Request for new entry received by ${req.body.user}`)
            entryProcessor.Process(context, req.body);
        }
    }
    context.done();
};