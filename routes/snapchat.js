var snapchat = require('snapchat'),
    client = new snapchat.Client(),
    fs = require('fs');

module.exports.login = function(req, res) {

    if(!fs.existsSync('./images')) {
        fs.mkdirSync('./images');
    }

    client.login(req.body.username, req.body.password).then(function(data) {
        if (typeof data.snaps === 'undefined') {
            console.log(data);
            res.send({
                error: true,
                error_message: 'Wrong username and/or password'
            });
            return;
        }

        console.log(data);

        data.snaps.forEach(function(snap) {
            console.log(snap);

            // Make sure the snap item is unopened and sent to you (not sent by you)
            if (typeof snap.sn !== 'undefined' && typeof snap.t !== 'undefined' && snap.st == 1) {
                console.log('Saving snap from ' + snap.sn + '...');

                // Save the image to ./images/{SENDER USERNAME}_{SNAP ID}.jpg
                var stream = fs.createWriteStream('./images/' + snap.sn + '_' + snap.id + '.jpg', { flags: 'w', encoding: null, mode: 0666 });
                client.getBlob(snap.id).then(function(blob) {
                    blob.pipe(stream);
                    blob.resume();
                });
            }
        });

        res.send(data);

    });

};

module.exports.rename = function(req, res) {
    client.rename(req.body.friend, req.body.name).then(function(data) {
        res.send(data);
    });
};