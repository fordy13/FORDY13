mod.factory('getParseData', ['$http', function($http) { 
  return $http.get('http://pastebin.com/raw/JX2Fw9Fq') 
            .success(function (req, res, data) { 
              return data; 
            }) 
            .error(function (err) { 
              return err; 
            }); 
}]);