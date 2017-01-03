// declaration of object
var Employee = {
	"name":"shanthee",
	"age":29,
	"salary":50000,
	//declaration of object with in object
	"address" : {
		"city": "bangalore",
		"state": "karnataka",
		"pincode": 560103
	}
};


//printing on console
console.log("Name: " + Employee.name);
console.log("Age: " + Employee.age);
console.log("Salary: " + Employee.salary);
console.log("City: " + Employee.address.city);
console.log("State: " + Employee.address.state);
console.log("Pincode: " + Employee.address.pincode);
