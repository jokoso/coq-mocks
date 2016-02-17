(function () {

  angular
    .module('coqMocks.mocks.fakeApi', [
      'ngMockE2E'
    ])
    .run(fakeApi);

  function fakeApi($httpBackend) {
    // Mocked users
    var users = ['Børge', 'Henning', 'Rolf', 'Peter'];
    
    // Return list of users
    $httpBackend.whenGET('/users').respond(users);

    // Add a user
    $httpBackend.whenPOST('/users').respond(function (method, url, data) {
      var user = angular.fromJson(data);
      users.push(user);
      return [200, user, {}];
    });

    // Allow HTML templates to be passed through
    $httpBackend.whenGET(/\.html$/).passThrough();

    // Etc., etc.
  }

})();
