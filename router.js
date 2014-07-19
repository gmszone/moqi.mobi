define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js',
    'js/ProductPage.js',
    'js/BlogDetailsView.js',
    'js/AboutView.js'
],function($, _, Backbone, HomeView, ProductPage, BlogDetailsView, AboutView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            'product': 'productPage',
            'blog/*slug': 'blog',
            'about':'about',
            '*actions': 'homePage'
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on('route:homePage', function(){
            var homeView = new HomeView();
            homeView.render();
        });

        app_router.on('route:productPage', function(){
            var productPage = new ProductPage();
            productPage.render();
        });

        app_router.on('route:about', function(){
            var aboutView = new AboutView();
            aboutView.render();
        });

        app_router.on('route:blog', function(blogSlug){
            var blogDetailsView = new BlogDetailsView();
            blogDetailsView.getBlog(blogSlug);
        });

        Backbone.history.start();
    };
    return {
      initialize: initialize
    };
});