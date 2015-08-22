(function() {
  'use strict';

  angular.module('marfedhaus').factory('Dogs', [
    '$q',
    '$resource',
    Dogs
  ]);

  function Dogs($q, $resource) {

    var cache = null;

    function find(dogs, id) {
      for (var i = 0; i < dogs.length; i++) {
        var dog = dogs[i];

        if (dog.id === id) {
          return dog;
        }
      }

      return null;
    }

    function get(id) {
      return $q.when(getAll()).then(function(dogs) {
        return find(dogs, id);
      });
    }

    function getAll() {
      if (cache !== null) {
        return cache;
      }

      var promise = $resource('marfedhaus/dogs.json').query().$promise;

      promise.then(function(dogs) {
        cache = dogs;
      });

      return promise;
    }

    return {
      get: get,
      getAll: getAll
    };
  }
})();
