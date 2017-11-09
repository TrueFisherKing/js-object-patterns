var button = document.querySelector('.button');

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

button.addEventListener('click', function(){person1.printPerson()});
