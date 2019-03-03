(function(){
	angular
		.module("multipleChoice")
		.controller("pageControl", pageController);
	
		function pageController(){
			var vm = this;
			vm.quizActive = true;
		}
})