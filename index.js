var through = require('through2');

module.exports = function(schema, options) {
    schema.static('writeStream', function() {
        var model = this;
        return through.obj(function(data, enc, cb) {
            var stream = this;
            model.create(data, function(err, res) {
                if (!err) {
                    stream.push(data);
                }
                cb(err);
            });
        });
    });
};
