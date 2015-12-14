angular.module('theBeanApp.services').factory('Article', function($resource) {
  return $resource('/api/articles/:id', { id: '@_id' }, {
    delete: {
      method: 'DELETE' 
    }
  });
});