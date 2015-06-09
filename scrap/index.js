var
    request = require('request-promise'),
    cheerio = require('cheerio'),
    notice_url = 'http://www.aiub.edu/category/notices';

var cheerioOptios = {
    normalizeWhitespace: true
};

var getDate = function (html) {
    return new Date(html.find('.day').text() + " " + html.find('.month').text() + " " + html.find('.year').text());
};

var getNotice = function (page) {
    console.log("Scrapping notice form page: ", page);
    return request(notice_url + '?pageNo=' + page)
        .then(function (body) {
            return cheerio.load(body, cheerioOptios);
        })
        .then(function ($) {
            var notices = [];

            $('ul.event-list > li').map(function (index, li) {
                notices.push(
                    {
                        date: getDate($(this)),
                        title: $(this).find('h2.title').text(),
                        description: $(this).find('p.desc').text(),
                        link: $(this).find('a.info-link').attr('href')
                    });

            });
            return notices;
        })
        .catch(console.error);
};

var getNoticeDetails = function (link) {
    return request("http://www.aiub.edu/"+link)
        .then(function (body) {
            return cheerio.load(body, cheerioOptios);
        })
        .then(function ($) {
            return {
                title: $('h1.header-title').text(),
                body: $('#single').html()
            }
        });
};


module.exports =  {
    notice : getNotice,
    noticeDetails : getNoticeDetails
};