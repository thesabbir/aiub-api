var
    request = require('request-promise'),
    cheerio = require('cheerio'),
    notice_url = 'http://www.aiub.edu/category/notices';


var getnotice = function (page) {
    console.log("Scrapping notice form page: ",page);
    return request(notice_url + '?pageNo='+page )
        .then(function (body) {
            return cheerio.load(body, {
                normalizeWhitespace: true
            });
        })
        .then(function ($) {
            var notices = [];

            $('ul.event-list > li').map(function (index, li) {
                notices.push(
                    {
                        title: $(this).find('h2.title').text(),
                        description: $(this).find('p.desc').text(),
                        link: notice_url + $(this).find('a.info-link').attr('href')
                    });

            });
            return notices;
        })
        .catch(console.error);
};


module.exports.notice = getnotice;
