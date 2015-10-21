app.factory('Poll', function($resource) {
	return $resource('getlist', {}, {
		query: {
			method: 'GET',
			params: {},
			isArray: true
		}
	});
})
.factory('PollItem', function($resource) {
	return $resource('get/:id', {}, {
		query: {
			method: 'GET',
			params: {},
			isArray: false
		}
	});
});