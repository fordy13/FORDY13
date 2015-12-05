

app.controller('mainController', ['$scope','$resource', '$timeout', '$location','$window', 'FileUploader',
	function ($scope, $resource, $timeout, $location, $window, FileUploader) {

	var Article = $resource('/api/articles')
	
	Article.query(function (results) {
		$scope.articles = results;
	});

	// Create file uploader instance
    $scope.uploader = new FileUploader({
      url: 'api/pictures'
    });

    // Set file uploader image filter
    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function(item, options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // Called after the user selected a new picture file
    $scope.uploader.onAfterAddingFile = function(fileItem) {
      if ($window.FileReader) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(fileItem._file);

        console.log(fileItem);
        fileReader.onload = function(fileReaderEvent) {
          $timeout(function() {
            $scope.imageURL = fileReaderEvent.target.result;
          }, 0);
        };
      }
    };

    // Called after the user has successfully uploaded a new picture
    $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {

      $scope.imgName = response.imgName;
      // Clear upload buttons
      $scope.createArticle();
      $scope.cancelUpload();
    };

    // Called after the user has failed to uploaded a new picture
    $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
      // Clear upload buttons
      $scope.cancelUpload();

      // Show error message
      $scope.error = response.message;
    };

    // Cancel the upload process 
    $scope.cancelUpload = function() {
      $scope.uploader.clearQueue();
    };

    $scope.uploadPicture = function() {
      // Start upload
      $scope.uploader.uploadAll();
    };

	$scope.articles = []

	$scope.createArticle = function (file){

    console.log('createArticle called...');

		var article = new Article();
		article.title = $scope.articleTitle;
    article.date = Date.now();
		article.subtitle = $scope.articleSubtitle;
		article.content = $scope.articleContent;
		article.imgName = $scope.imgName;

		article.$save(function (result) {
			$scope.articles.push(result);
			$scope.articleTitle = '';
			$scope.articleSubtitle = '';
			$scope.articleContent = '';
		});
	};

	$scope.deleteArticle = function (article){
		if (article){
			article.$remove( function (response) {
          for (var i in $scope.articles) {
            if ($scope.articles[i] === article) {
              $scope.articles.splice(i, 1);
            }
          }
          $location.path('articles');
        });
		}
	};

}]);
