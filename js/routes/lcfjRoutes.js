/**
 * Created by Wayne on 12/28/16.
 */

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "js/views/home-view.html"
        })
        .when("/jobs", {
            templateUrl : "js/views/jobs-view.html"
        })
        .when("/contact", {
            templateUrl : "js/views/contact-view.html"
        })
        .otherwise({
            templateUrl : "js/views/home-view.html"
        })
});


