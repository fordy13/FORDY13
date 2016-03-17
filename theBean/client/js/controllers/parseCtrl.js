mod.controller('parseCtrl', ['$scope', function ($scope) {
    $scope.parseData = "Hello,\r\n\r\nThanks for connecting us, Greg. Paul, let's find a time to talk about your\r\nupcoming projects. Are you available for a call on Tuesday morning?  If so,\r\nlet me know what time works, I'm around until noon.  Also, the best number\r\nto reach you.\r\n\r\nLook forward to connecting.\r\n\r\nBest wishes,\r\n\r\nMelissa\r\n\r\n";
    $scope.parsed = $scope.parseData.split('\r\n');

    $scope.clicked = function() {
        console.log($scope.parsed)
    }
}]);