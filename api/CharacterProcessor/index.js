const entryProcessor = require('./entryProcessor');

module.exports = function(context, req) {
    context.log(`Request for new entry received by ${req.body.user}`)
    if (req.body.skills && req.body.user) {
        if (req.body.skills.some(skill => skill > 99)) {
            return;
        }
        else {
            entryProcessor.Process(req.body.skills, req.body.user, req.body.mastery);
        }
    }
    context.done();
};