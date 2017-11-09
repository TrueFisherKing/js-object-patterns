var button = document.querySelector('.button');

var peopleFactory = function(name, age, state){
  var temp ={};
  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function(){
    console.log(this.name + ", " + this.age + ", " + this.state);
  }
  return temp;
}

var person1 = peopleFactory('John', 23, 'CA');
var person2 = peopleFactory('Kim', 27, 'SC');

var PeopleConstuctor = function(name, age, state){
  this.age = age;
  this.name = name;
  this.state = state;

  this.printPerson = function(){
    console.log(this.name + ", " + this.age + ", " + this.state);
  }
}

var person1 = new PeopleConstuctor('John', 23, 'CA');
var person2 = new PeopleConstuctor('Kim', 27, 'SC');

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

var PeopleDynamicProto = function(name, age, state){
  temp.age = age;
  temp.name = name;
  temp.state = state;

  if (typeof this.printPerson !== 'function') {
    PeopleDynamicProto.prototype.printPerson = function(){
        console.log(this.name + ", " + this.age + ", " + this.state);
    };
  }
};
var person6 = new PeopleDynamicProto('John', 23, 'CA');
button.addEventListener('click', function(){person6.printPerson()});
