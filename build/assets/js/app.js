var app=angular.module("pinPoint",['ui.bootstrap']);

app.service('pinPointService',function($http){

  return({
          getPinPointData: getPinPointData
      });

  function getPinPointData() {

    return $http.get('output.json');
  }
});

app.controller('TypeaheadCtrl',['$scope','pinPointService', function ($scope,pinPointService) {
  console.log('hello')
  pinPointService.getPinPointData().success(function(httpData) {

        $scope.statesWithFlags=httpData;

        console.log($scope.statesWithFlags)
    })
    .error(function (http, status, fnc, httpObj ) {        
        console.log('albums retrieval failed.',http,status,httpObj);
    });
}]);



/*app.controller('TypeaheadCtrl', function($scope, $http) {

  
  

  $scope.statesWithFlags = 
  [
	{
		"id": "GBR|",
		"text": "",
		"name": "449 17TH CROSS	SECTOR 4 HSR LAYOUT	BENGALURU AE91 - 1AB",
		"Next": "Find"
	},
	{
		"id": "GBR|",
		"text": "",
		"name": "448 17TH CROSS	17TH MAIN SECTOR 4 HSR LAYOUT BENGALURU	AE91 - 1AB",
		"Next": "Find"
	},
	{
		"name":"488	15TH B CROSS SECTOR 4 HSR LAYOUT BENGALURU AE91 - 1AC"
	}
		
	
  ];
});
*/