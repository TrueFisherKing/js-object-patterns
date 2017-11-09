var button = document.querySelector('.button');

var PeopleProto = function(){
}
PeopleProto.prototype.age = 0;
PeopleProto.prototype.name = "no name";
PeopleProto.prototype.city = "no city";

PeopleProto.prototype.printPerson = function(){
  console.log(this.name + ", " + this.age + ", " + this.city);
}
var person5 = new PeopleProto();
person5.name = "John";
person5.age = 23;
person5.city = "CA";

button.addEventListener('click', function(){person5.printPerson()});
