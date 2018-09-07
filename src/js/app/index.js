define(['handlebars', 'jquery'], function(Handlebars, $) {
    var obj = {
        title: '推荐',
        title: '手机',
        title: '智能',
        title: '电视',
        title: '电脑',
        title: '全面屏'
    }
    var txt = $('#txt').html();
    var template = Handlebars.compile(txt);
    var html = template(obj);
    $('.bottom').html(html);
})