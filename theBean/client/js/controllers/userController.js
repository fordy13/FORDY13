app.controller('userController', ['$scope','getCurrentUser',
function ($scope, getCurrentUser) {

	$scope.users = []

	getCurrentUser.success( function (data){
		if(data)
			$scope.currentUser = data;
	});

	$scope.isAdmin = function () {
		if ($scope.currentUser)	
			if ($scope.currentUser.group === 'admin')
				return true;
		return false;
	};

	$scope.isLoggedIn = function() {
		if($scope.currentUser)
			return true;
		return false;
	}


}]);