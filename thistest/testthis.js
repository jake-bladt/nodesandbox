var higherFn = function(fName, lName) {
  return {
    firstName: fName,
    lastName: lName,
    getFullName: function() {
      return this.firstName + " " + this.LastName;
    }
  }
};

var myObj = higherFn('Jake', 'Bladt');
console.log(myObj.getFullName());
