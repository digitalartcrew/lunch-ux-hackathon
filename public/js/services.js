app.service("AdultService",['$resource', function($resource){
	return $resource('/api/adults/:id', {id: '@_id'}, {
		update : {
			method: 'PUT'
		}
	});
}]);

app.service("ChildService",['$resource', function($resource){
	return $resource('/api/children/:id', {id: '@_id'}, {
		update : {
			method: 'PUT'
		}
	});
}]);