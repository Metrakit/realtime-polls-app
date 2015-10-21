app.controller('PollListController', function($scope, Poll) {
	$scope.polls = Poll.query();
})
.controller('PollViewController', function($scope, $routeParams, PollItem) {
	var id = $routeParams.id;
	$scope.poll = PollItem.query({id: id});
})
.controller('PollCreateController', function($scope) {
	$scope.poll = {
		question: '',
		choices: [{answer: ''}, {answer: ''}]
	};

	$scope.addChoice = function() {
		$scope.poll.choices.push({answer: ''});
	};

	$scope.savePoll = function() {

	};
});