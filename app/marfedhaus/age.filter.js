(function() {
  'use strict';

  angular.module('marfedhaus').filter('age', age);

  function age() {

    return function(input) {
      var currentDate = moment();
      var birthDate = moment(input, 'YYYY-MM-DD');

      return currentDate.diff(birthDate, 'years');
    };
  }
})();
