/*
 * angular.module("connect",[
    'ngRoute',
    'ngResource',
    'connect.homeView',
    'connect,httoView'])
        .factory('Topics',['$resource', function($resource){
              
                return $resource('http://localhost\\ :8080/aak/webresources/funator.usuaris/%7Bid%7D/:id', null ,
        {
            
            
            'agafar': { method:'GET', params: {id: 'goku'}}
            
        });
    }]);
    
    



*/




/*
 * var connectar = $resource('http://localhost:8080/aak/webresources/funator.usuaris/%7Bid%7D');


angular.module('iniciar',[])
        .controller('controlador',['$scope', function($scope){
                $scope.username = "Introdueix el nom";
              //  $scope.password = "Introdueix la pass";
                
        $scope.apretar=function(){
            $scope.comprovar = 'Benvingut '+ $scope.username;
            
        };
    }]);

*/








/*

 var app = angular.module('serviceConsumer', []);

        app.controller('questionsController', function ($scope, $http) {
       //$scope.comprovar = 'Benvingut '+ $scope.username;
       //var url = "http://localhost:8080/aak/webresources/funator.usuaris/%7Bid%7D";
       var username = $scope.username;
       //var password=  $scope.password;
           var input = document.getElementById('algo');
           var input2 = document.getElementById('algo2');
           
                                        $scope.apretar=function(){
                                            if(input.value.length === 0)
                                            {
                                                $scope.algo = "Introdueix un valor";
                                  
                                            }
                                            else
                                            {
                                                //$scope.algo = input.value;
                                                
                                                $http.get('http://localhost:8080/aak/webresources/funator.usuaris')
                                                        .success(function(data){
                                                            input.value="IM IN!";
                                                        })
                                                                .error(function(error,status){
                                                                    input.value="No he entrat";
                                                                     $scope.appDetail = e || "Request failed";
                                                                });
                                                }
                                            };
                                         
            
                   
                   });
             
        */
       
 var app = angular.module('serviceConsumer', []);

 app.controller('questionsController', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache){
      $scope.method = 'GET';
      $scope.url ='http://localhost:8080/aak/webresources/funator.usuaris';
    $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
           var input = document.getElementById('algo');
           var input2 = document.getElementById('algo2');
           
                                        $scope.apretar=function(){
                                            if(input.value.length === 0)
                                            {
                                                $scope.algo = "Introdueix un valor";
                                  
                                            }
                                            else
                                            {
                                                
                                                   $scope.code = null;
                                                   $scope.response = null;
                                                //$scope.algo = input.value;
                                                $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
                                                    success(function(data, status) {
                                                            input.value="IM IN!";
                                                            $scope.data = data;
                                                        })
                                                                .error(function(error, status){
                                                                    input.value="No he entrat";
                                                                     $scope.appDetail = error || "Request failed";
                                                                });
                                                }
                                            };
                   
                   }]);
             
             
             
             
             
      