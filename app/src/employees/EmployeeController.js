(function(){

  angular
       .module('employees')
       .controller('EmployeeController', [ '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope','$http',
          EmployeeController
       ]);

  /**
   * Main Controller for the Project Management App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function EmployeeController(  $mdSidenav, $mdBottomSheet, $log, $q,$scope,$http) {
    var self = this;

    self.selected     = null;
    self.employees        = [ ];
    $scope.tblshow = false;
			$scope.changeValues = function (){
				$scope.tblshow = true;
				$http.get("http://localhost:8090/getEmployees").success(
				function(response) {
					$scope.dbValue = response;
				});
			}

    // Load all registered services

    
    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
   

  }

})();
