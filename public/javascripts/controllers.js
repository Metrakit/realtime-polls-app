app.controller('PollListController', function($scope, Poll) {
	$scope.loading = true;
	$scope.polls = Poll.query(function() {
		$scope.loading = false;
	});
})
.controller('PollViewController', function($scope, $routeParams, PollItem, Vote) {
	var id = $routeParams.id;
	$scope.loading = true;
	$scope.poll = PollItem.query({id: id}, function() {
		$scope.loading = false;
	});
	$scope.vote = function() {
		var pollId   = $scope.poll._id;
		var choiceId = $scope.poll.userVote;
		Vote.get({pollid: pollId, choiceid: choiceId});
	};
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