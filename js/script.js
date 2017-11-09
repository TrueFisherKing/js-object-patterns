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

button.addEventListener('click', function(){person1.printPerson()});
