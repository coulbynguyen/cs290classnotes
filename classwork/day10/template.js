function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
};

var person = new Person("Leia", "Organa", 23);
console.log("person:", person);
console.log("person.getFullName():", person.getFullName());

console.log("Person:", Person);
