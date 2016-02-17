(function () {

  angular
    .module('coqMocks', [
      'coqMocks.mocks.fakeApi', // Simply comment out to not use the fake API!
      'coqMocks.services.user'
    ])
    .controller('CoqController', CoqController);

  function CoqController(userService) {
    var vm = this;

    vm.users = [];
    vm.showError = false;
    vm.getUsers = getUsers;

    function getUsers() {
      userService.getUsers()
        .then(processData)
        .catch(processError);

      function processData(data) {
        vm.users = data;
      }

      function processError(error) {
        vm.showError = true;
      }
    }
  }

})();
