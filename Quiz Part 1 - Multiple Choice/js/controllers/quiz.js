(function(){
	angular
		.module("multipleChoice")
		.controller("pageCtrl", PageController);


PageController.$inject = ['quizMetrics'];
		function PageController(quizMetrics){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.data = quizData;
			vm.activeQuiz = {};
			vm.changeActiveQuiz = changeActiveQuiz;
			vm.activateQuiz = activateQuiz;
			vm.search = "";
		}

		function changeActiveQuiz(index) {
			vm.activeQuiz = index;
		}

		function activateQuiz(){
			quizMetrics.changeState(true);
		}
})
