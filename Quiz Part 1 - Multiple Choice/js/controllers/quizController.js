(function(){
	angular
		.module("multipleChoice")
		.controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics']
    function QuizController(quizMetrics){
      var vm = this;

      vm.quizMetrics= quizMetrics;

    }

});
