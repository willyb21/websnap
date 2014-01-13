
exports.indexView = function(req, res) {
    res.render('index');
};

exports.aboutView = function(req, res) {
    res.render('about-view');
};

exports.renameView = function(req, res) {
    res.render('rename');
};

exports.pendingView = function(req, res) {
    res.render('pending-snaps');
};