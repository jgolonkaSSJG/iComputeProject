(function(){

	angular
		.module("multipleChoice")
		.factory("quizMetrics", QuizMetrics)

		function QuizMetrics(){
			var quizObj = {
					quizActive: false,
					changeState: changeState
			};

			return quizObj;

			function changeState(state) {
				quizObj.quizActive= state;
			}

		}
});
