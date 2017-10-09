var movieApp=angular.module("movieApp",['ngRoute']);


movieApp.config(function($routeProvider) {
    $routeProvider
    .when("/movieList", {
        templateUrl : "/html/listMovie.html",
        controller:"movieListCntrl"
    })
    .when("/movieInfo", {
        templateUrl : "/html/movieInfo.html",
        controller:"movieInfoCntrl",
        resolve: {
            movieInfo: function(movieService){
                return movieService.getMovie();
        }}
    });
});

movieApp.controller("movieCntrl",function($location){
	
	$location.path("/movieList");

});
