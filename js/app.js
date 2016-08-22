var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

$(document).ready(function(){

    var router = new Router();
    var search = new Search();

    router.on('route:home', function() {
        search.render();
    });

    Backbone.history.start();
});