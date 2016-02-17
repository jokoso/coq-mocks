(function () {

  angular
    .module('coqMocks.services.user', [])
    .factory('userService', userService);

  function userService($http, $q) {
    return {
      getUsers: function () {
        return $http.get('/users')
          .then(processResponse)
          .catch(processError);

        function processResponse(response) {
          // E.g., store data in service
          return response.data;
        }
  
        function processError(error) {
          // E.g., $log locally or on remote, etc.
          return $q.reject(error);
        }
      }
    };
  }

})();
