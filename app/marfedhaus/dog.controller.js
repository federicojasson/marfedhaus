(function() {
  'use strict';

  angular.module('marfedhaus').controller('DogCtrl', DogCtrl);

  function DogCtrl(dog) {
    var vm = this;
    vm.dog = dog;
  }
})();
