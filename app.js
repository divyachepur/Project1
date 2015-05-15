var myAngularApp = angular.module("myAngularApp", ["ngRoute"]);

myAngularApp.config(function($routeProvider){
  $routeProvider.when('/Hospitals',
   	 {
     templateUrl : 'Hospital.html',
     controller : 'myController'
     })
     .when('/Doctors',
      {
       templateUrl : 'Doctor.html',
       controller : 'myController'
       })
      .when('/', {redirectTo: '/Hospitals'})
      .otherwise({redirectTo:'/'});
  });

myAngularApp.factory("myFactory", function() {
	var factory = {};
	var hospitals =[{id: 1, name:'Hospital 1'},{id : 2, name : 'Hospital 2'}];
	var doctors =[{id: 1, firstName: 'Doctor 1 FName', lastName: 'LName'},{id: 2, firstName:'Doctor 2 FName', lastName: 'LName'}];
	var staff = [{hospitalId: 1, doctorId: 1}, {hospitalId: 2, doctorId: 2}];

	factory.getHospitals = function() {
		return hospitals;
	};
	factory.getDoctors = function() {
		return doctors;
	};
	factory.getStaff = function() {
		return staff;
	};
	return factory;
});