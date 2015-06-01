var
    request = require('request-promise'),
    cheerio = require('cheerio'),
    notice_url = 'http://www.aiub.edu/category/notices';


var getSome = function (url, selector) {
    console.log("Scrapping...");

    return request(url)
        .then(function (body) {
            console.log("Body Loaded!");
            return cheerio.load(body, {
                normalizeWhitespace: true,
                xmlMode: true
            });
        })
        .then(function ($) {
            return $(selector);
        })
        .catch(console.error);
};


getSome(notice_url, 'ul.event-list > li').then(function (eventsHtml) {
    console.log(eventsHtml);
});