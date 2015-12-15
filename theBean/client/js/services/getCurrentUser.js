mod.factory('getCurrentUser', ['$http', function($http) { 
  return $http.get('/api/users/getCurrentUser') 
            .success(function (req, res, data) { 
              return data; 
            }) 
            .error(function (err) { 
              return err; 
            }); 
}]);