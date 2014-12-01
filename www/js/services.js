angular.module('starter.services', [])

/**
 * CatalougeService that returns all catalogue links.
 */
.factory('CatalougeService', ['$http', function($http) {
  return {
    getCategoryList: function () {
      //Returns all data (Category Lists)      
      return $http.get('data/catalouge.json');
    },
    getCategoryDetails: function (id) {
      //Returns data of a specific category
    }
  }
}])
.factory('MyVideosService', ['$http', function($http) {
  var baseimages = [{
    "id": "cat1-1-1",
    "title": "Titanic",
    "images": [{"thumb-url": "../img/assets/1.jpg"}]
  },
  {
    "id": "cat1-1-2",
    "title": "Thor",
    "images": [{"thumb-url": "../img/assets/2.jpg"}]
  },
  {
    "id": "cat1-1-3",
    "title": "Iron Man",
    "images": [{"thumb-url": "../img/assets/3.jpg"}]
  }];
  var currentBuffer = [];
  baseimages.forEach(function(item){
    currentBuffer.push(item);
  });
  return {
    getMyVideos: function () {
      //Returns all my videos      
//      return $http.get('data/myvideos.json');
//Mock Data
  baseimages.forEach(function(item){
    currentBuffer.push({
      id:item.id,
      title:item.title,
      images:item.images
    });
  });

  return {

    then:function(f){
      f({
        data:currentBuffer
        });
    }
  };
  }
}
}]);