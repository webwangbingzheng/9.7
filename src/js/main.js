require.config({
    baseUrl: '/js/',
    paths: {
        'jquery': 'libs/jquery',
        'handlebars': 'libs/handlebars.min',
        'index': 'app/index'
    }
})
require(['index'])