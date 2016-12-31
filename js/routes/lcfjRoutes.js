/**
 * Created by Wayne on 12/28/16.
 */

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "view/home-view.html"
        })
        .when("/jobs", {
            templateUrl : "view/jobs-view.html"
        })
        .when("/contact", {
            templateUrl : "view/contact-view.html"
        })
        .when("/resources", {
            templateUrl : "view/resources.html"
        })
        .when("/donate", {
            templateUrl: "view/donate.html"
        })
        .otherwise({
            templateUrl : "view/home-view.html"
        })
});


