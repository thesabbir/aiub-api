import request from 'request-promise';
import cheerio from 'cheerio';

const notice_url = 'http://www.aiub.edu/category/notices';
const cheerioOptions = {
    normalizeWhitespace: true
};

export function getDate(html) {
    return new Date(`${html.find('.day').text()} ${html.find('.month').text()} ${html.find('.year').text()}`);
}

export function getNotice(page=1) {
    console.log(`Scrapping notice form page: ${page}`);
    return request(`${notice_url}?pageNo=${page}`)
        .then(body => cheerio.load(body, cheerioOptions))
        .then($ => {
            const result = [];
                $('ul.event-list > li').map(function (index, li) {
                const item = $(li);
                result.push({
                    date: getDate(item),
                    title: item.find('h2.title').text(),
                    description: item.find('p.desc').text(),
                    link: item.find('a.info-link').attr('href')
                });
            });
            return result;
        })
        .catch(console.error);
}

export function getNoticeDetails(link) {
    return request(`http://www.aiub.edu/${link}`)
        .then(body => cheerio.load(body, cheerioOptions))
        .then($ => ({
            title: $('h1.header-title').text(),
            body: $('#single').html()
        }))
        .catch(console.error);
}