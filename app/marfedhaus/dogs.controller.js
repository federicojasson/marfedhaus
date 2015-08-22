(function() {
  'use strict';

  angular.module('marfedhaus').controller('DogsCtrl', DogsCtrl);

  function DogsCtrl(dogs) {
    var vm = this;
    vm.dogs = dogs;
  }
})();
