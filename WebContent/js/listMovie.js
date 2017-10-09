
movieApp.controller("movieListCntrl",function($scope,$location){
	
	$scope.movieSearch="";
	
	$scope.getMovieInfo=function(movieId){
		$scope.movieInfo=angular.copy($scope.movieList[movieId]);
		$location.path("movieInfo");
	};
	
	$scope.searchMovie=function(){
		$scope.movieSearchFinal=angular.copy($scope.movieSearch);
	}
	
	
	$scope.movieList=[{
			"id":0,
			"name":"Munagaru Male",
			"hero":"Ganesh",
			"Description":"Mungaru Male (English: Pre-Monsoon rain) is a 2006 Indian Kannada-language musical romance film co-written and directed by Yogaraj Bhat, and produced by E. Krishnappa. It stars Ganesh, Pooja Gandhi and Anant Nag in lead roles. The film is believed to have shaped and strengthened the careers of Ganesh, Pooja Gandhi, director Yograj Bhat, lyricist Jayant Kaikini, choreographers A. Harsha, Imran Sardaria, composer Mano Murthy and others in Kannada cinema, and made Bollywood playback singers Sonu Nigam, Kunal Ganjawala, Udit Narayan, Sunidhi Chauhan and Shreya Ghoshal popular in the state.",
			"thumbnile":"/image/mungarumale.jpg"
	},
	{
		"id":1,
		"name":"Barjari",
		"hero":"Druva sarja",
		"Description":"Bharjari is a 2017 Indian Kannada romance film written and directed by Chethan Kumar. It stars Dhruva Sarja, Rachita Ram, Hariprriya and Vaishali Deepak in the lead roles.[1] The supporting cast features Sudharani, Srinivasa Murthy and Sai Kumar.",
		"thumbnile":"/image/barjari.jpg"
},
{
	"id":2,
	"name":"Rajkumara",
	"hero":"Punith",
	"Description":"Raajakumara (English: The Prince) is an Indian Kannada language family action film written and directed by Santhosh Ananddram and produced by Vijay Kiragandur under the Hombale Films banner. It stars Puneeth Rajkumar and Priya Anand in lead roles. Apart from them, the film features an ensemble cast of Ananth Nag, Sarath Kumar, Prakash Raj, Chikkanna, Avinash in important roles.[3] V. Harikrishna composed the film's score and soundtrack.The film was released on 24 March 2017.",
	"thumbnile":"/image/rajkumara.jpg"
},
{
	"id":3,
	"name":"U Turn",
	"hero":"Sraddha Srinath",
	"Description":"U Turn is a 2016 Indian Kannada mystery thriller film with elements of suspense, written, produced and directed by Pawan Kumar. It stars Shraddha Srinath in the lead role. Roger Narayan, Dilip Raj and Radhika Chetan feature in supporting roles. The plot revolves around the death of motorists who break a traffic rule at a particular flyover in Bangalore and subsequent pinning down of the culprit by an intern journalist and police inspector duo.[2][3] The film was remade in Malayalam as Careful (2017).",
	"thumbnile":"/image/uturn.jpg"
}];
});