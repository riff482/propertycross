require('./../node_modules/jquery/dist/jquery.min.js');
require('./../node_modules/underscore/underscore-min.js');
require('./../node_modules/backbone/backbone-min.js');

require('./../less/style.less');

var Search = require('./views/search');

var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var router = new Router();
var search = new Search();

router.on('route:home', function() {
    search.render();
});

Backbone.history.start();