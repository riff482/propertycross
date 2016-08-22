var Search = Backbone.View.extend({
    el: '.main-content',
    render: function(){
        this.$el.html(template);
    }
});

var template =
    '<div class="search-top">'
        +'<div class="inner">'
            +'<span class="logo">PropertyCross</span>'
            +'<a class="btn blue" href="#">Faves</a>'
        +'</div>'
    +'</div>'
    +'<div class="search-content">'
        +'<div class="inner">'
            +'<div class="search">'
                +'<p>Use the form below to search for houses to buy. You can search by place-name,'
                +'postcode, or click My location, to search in your current location!</p>'
                +'<form>'
                    +'<input  id="search" type="text">'
                    +'<button class="btn blue" type="submit">Go</button> '
                    +'<button class="btn blue" type="button">My location</button>'
                +'</form>'
                +'<div class="search-results-content recent-search">'
                    +'<h3>Recent searches:</h3>'
                    +'<ul>'
                        +'<li><a href="#">Search #1 (<span>12</span>)</a></li>'
                        +'<li><a href="#">Search #2 (<span>355</span>)</a></li>'
                        +'<li><a href="#">Search #3 (<span>45</span>)</a></li>'
                    +'</ul>'
                +'</div>'
                +'<div class="search-results-content recent-search">'
                    +'<h3>Please select a location below:</h3>'
                    +'<ul>'
                        +'<li><a href="#">Location #1</a></li>'
                        +'<li><a href="#">Location #2</a></li>'
                        +'<li><a href="#">Location #3</a></li>'
                        +'<li><a href="#">Location #4</a></li>'
                    +'</ul>'
                +'</div>'
                +'<div class="search-error">There was a problem with your search</div>'
            +'</div>'
        +'</div>'
    +'</div>';