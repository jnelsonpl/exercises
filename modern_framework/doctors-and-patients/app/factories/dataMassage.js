'use strict';

app.factory('dataMassage', function () {

	let massageTheData = (function (dataToMassage) {
		
		let doctorList = dataToMassage.data.doctors;
		let patientList = dataToMassage.data.patients;

		let doctorArray = [];
		let patientArray = [];

		/* Dr Array */
		for (var x in doctorList) {

			let drObj = doctorList[x]; // <-- Gives us Object
			let getProp  = Object.keys(drObj); // <-- Gives us 'key' (i.e; name) of each object
			// String(getProp)); <-- Gives us 'key' (name) of the object
			// console.log(drObj[getProp]);  // <-- can now access properties on object

			Object.keys(drObj).forEach(function(key) {
				drObj[key].key = key;
			});
			
			let aDoctorObject = {
				first_name: drObj[getProp].first_name,
				last_name: drObj[getProp].last_name,
				speciality: drObj[getProp].speciality,
				key: drObj[getProp].key
			};
			doctorArray.push(aDoctorObject);
		 }

		 /* Patient Array */
		for (var i in patientList) {

			let patientObj = patientList[i];
			let getProp  = Object.keys(patientObj);
			
			let aPatientObject = {
				first_name: patientObj[getProp].first_name,
				last_name: patientObj[getProp].last_name,
				ailment: patientObj[getProp].ailment,
				doctor: patientObj[getProp].doctor_id
			};
		
			patientArray.push(aPatientObject);
		 }

		return [
			doctorArray, 
			patientArray
			];

	});

	return {massageTheData};

});






