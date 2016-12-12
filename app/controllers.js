import * as scrap from './scrap';

export function index(req, res) {
    res.send("visit https://github.com/thesabbir/aiub-api for docs");
}

export function notices(req, res) {
    scrap.getNotice(req.params.page).then(function (notices) {
        res.json(notices);
    });
}
export function noticeDetails(req, res) {
    scrap.getNoticeDetails(req.params.link).then(function (details) {
        res.json(details);
    });
}