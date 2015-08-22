(function() {
  'use strict';

  angular.module('marfedhaus').filter('gender', gender);

  function gender() {

    var genders = {
      female: 'hembra',
      male: 'macho'
    };

    return function(input) {
      return genders[input];
    };
  }
})();
