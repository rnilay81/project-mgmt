(function(){

  angular
       .module('tasks')
       .controller('TaskController', [
          'taskService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$http','$scope',
          TaskController
       ]);

  /**
   * Main Controller for the Project Management App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TaskController( taskService, $mdSidenav, $mdBottomSheet, $log, $q,$http,$scope) {
    var self = this;

    self.selected     = null;
    self.tasks        = [ ];
    self.selectTask   = selectTask;
    self.toggleTaskList   = toggleTaskList;
	 self.showContactOptions  = showContactOptions;
    

    // Load all registered services

    taskService
          .loadAllTasks()
          .then( function( tasks ) {
            self.tasks    = [].concat(tasks);
            self.selected = tasks[0];
          });

		  
		
				$http.get("http://localhost:8090/getEmployees").success(
				function(response) {
					$scope.dbValue = response;
					alert($scope.dbValue);
				}).
				  error(function(data, status, headers, config) {
					$scope.dbValue = status;
				  });;
			

		  
    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleTaskList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectTask ( task ) {
      self.selected = angular.isNumber(task) ? $scope.tasks[task] : task;
      self.toggleTaskList();
    }

      /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var user = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: 'src/users/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.user = user;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
