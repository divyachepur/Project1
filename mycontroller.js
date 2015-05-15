myAngularApp.controller("myController", function($scope, myFactory){
 $scope.hosp = myFactory.getHospitals();
 $scope.doc = myFactory.getDoctors();
 $scope.staff = myFactory.getStaff();

 $scope.getDoctorsForHospital = function(hospitalId) {
	var hospitalStaff = [];
	for(var i=0; i < $scope.staff.length; i++) {
		if($scope.staff[i].hospitalId == hospitalId) {
			hospitalStaff.push($scope.staff[i]);
		}
	}
	var doctors = [];
	for(var i=0; i < hospitalStaff.length; i++) {
		for(var j=0; j < $scope.doc.length; j++) {
			if(hospitalStaff[i].doctorId == $scope.doc[j].id) {
				doctors.push($scope.doc[j]);
				break;
			}
		}
	}
	return doctors;
 };

 $scope.getHospitalForDoctors = function(doctorId) {
	var doctorStaff = [];
	for(var i=0; i < $scope.staff.length; i++) {
		if($scope.staff[i].doctorId == doctorId) {
			doctorStaff.push($scope.staff[i]);
		}
	}
	var hospital = [];
	for(var i=0; i < doctorStaff.length; i++) {
		for(var j=0; j < $scope.hosp.length; j++) {
			if(doctorStaff[i].hospitalId == $scope.hosp[j].id) {
				hospital.push($scope.hosp[j]);
				break;
			}
		}
	}
	return hospital;
 };
});