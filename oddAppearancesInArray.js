/**
 *Create an object which has the number of instances for each item in the array
 *Iterate through remaining and check to see if that property of the object is an even or odd number
 */

function findOdd(inputArray) {
	var instancesOf = {}

	instancesOf = populateInstancesOf(inputArray);

	return findOddInstance(inputArray, instancesOf);
}

//Finds the Odd instance ine array, given the array and the obj that holds how many times each appears
function findOddInstance(arr, obj) {
	var oddNumber = 0;
	
	arr.forEach(function (current) {
		if (isOdd(obj[current])) {
			oddNumber = current;
		}
	});
	
	return oddNumber;
}

//creates an obj which holds how many times each item in the array exists
function populateInstancesOf(arr) {
	
	var obj = {};
	
	arr.forEach(function (current) {
		if (obj[current] !== undefined) {
			obj[current] += 1;
		} else {
			obj[current] = 1;
		}
	});
	
	return obj;
}

//checks to see if x is odd, returns true if it is
function isOdd(x) {
	
	if (x % 2 === 0) {
		return false;
	}
	
	return true;
}
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
