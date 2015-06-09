var scrap = require('./scrap');

module.exports = {
    index : function (req, res) {
        res.send("OK");
    },
    notices: function (req, res) {
        scrap.notice(req.params.page).then(function (notices) {
            res.json(notices);
        });
    },
    noticesDetails: function (req, res) {
        scrap.noticeDetails(req.params.link).then(function (details) {
            res.json(details);
        });
    }
};