class Person {
  constructor(name= 'Anon', age= 0){
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    return `Hi my name is ${this.name}. `;

  }

  getDescription(){
    return `I am ${this.age} and my name is ${this.name}`;
  }
   
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major
  }
  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()){
      description += `Their major is ${this.major}`;
    }
    return description;
  }

}

class Traveler extends Person{
  constructor(name, age, location){
    super(name, age);
    this.location = location;
  }
  hasLocation(){
    return !!this.location;
  }
  getGreeting(){
    let greeting = super.getGreeting();

    if(this.hasLocation()){
      greeting += `I'm visting from ${this.location}`;
    }

    return greeting;
  }
}
const me = new Traveler('Jonathan', 25) ;
console.log(me.getGreeting());

const student = new Student('Andrew', 26);
console.log(student.getDescription());
