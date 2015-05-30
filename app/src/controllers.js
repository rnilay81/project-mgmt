'use strict';

/* Controllers */

var bgspmsControllers = angular.module('bgspmsControllers', []);

bgspmsControllers.controller('HomeCtrl', ['$scope', '$http',
   function($scope, $http) {
		$scope.content='BGS is Billing Gateway System. This acts as a gateway for the user to facilitate the user to add/validate/see inventory data before billing takes place.Situated in between BFG and Phoenix as upstream and downstream respectively. BGS also provides various kind of reports to the user. Developed in Java, Struts2, Spring, Hibernate . We pride ourselves in following various standard practices. We are constantly looking forward to improvements, new techniques and new challenges.';
		$scope.icon = 'home';
	  }
      
    ]
	
	
  
 );

bgspmsControllers.controller('AttendanceCtrl', function($scope,  $filter,$http, ngTableParams) {

 $http.get('http://localhost:8090/getEmployees')
  .success(function(data, status) {

 	$scope.tableParams = new ngTableParams({
		page: 1,            // show first page
		count: 10,          // count per page
		sorting: {
		foo: 'asc'     // initial sorting
    }
	}, {
    total: data.length, // length of data
    getData: function($defer, params) {
        // use build-in angular filter
     var orderedData = params.sorting ?
                        $filter('orderBy')(data, params.orderBy()) :
                        data;
      orderedData = params.filter ?
                        $filter('filter')(data, params.filter()) :
                        data;
	
	  $scope.attendanceData = data.slice((params.page() - 1) * params.count(), params.page() * params.count());
				
      params.total(orderedData.length); // set total for recalc pagination
      $defer.resolve($scope.attendanceData);
	

}
  });
  });
});