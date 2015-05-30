(function(){
  'use strict';

  angular.module('tasks')
         .service('taskService', ['$q', TaskService]);

  /**
   * Tasks DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function TaskService($q){
    var tasks = [
      {
        name: 'Home',
        avatar: 'svg-1',
        content: 'BGS is Billing Gateway System. This acts as a gateway for the user to facilitate the user to add/validate/see inventory data before billing takes place.Situated in between BFG and Phoenix as upstream and downstream respectively. BGS also provides various kind of reports to the user. Developed in Java, Struts2, Spring, Hibernate . We pride ourselves in following various standard practices. We are constantly looking forward to improvements, new techniques and new challenges.',
		icon : 'home'
		
      },
      {
        name: 'Attendance ',
        avatar: 'svg-2',
        content: 'Attendance management in one place. System will automatically send out a mail to the user group (preconfigured users) with the link to register the attendance. If user clicks on the link after specified time frame ( usually 11 AM IST), it will automatically register the user with Late Mark ( L ). We are also giving the facility to have a look at various charts to have a comparative study.',
		icon: 'group'
      }
    ];

    // Promise-based API
    return {
      loadAllTasks : function() {
        // Simulate async nature of real remote calls
        return $q.when(tasks);
      }
    };
  }

})();
