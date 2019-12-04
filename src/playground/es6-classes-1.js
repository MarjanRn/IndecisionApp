class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, hometown) {
        super(name, age);
        this.hometown = hometown;
    }

    hasHometown() {
        return !!this.hometown;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHometown())
            greeting += `I'm Visiting from ${this.hometown}`;
        return greeting;
    }
}


const person1 = new Student('Soheil', 12, 'Software Engineering');
console.log(person1.getDescription());

const person2 = new Student();
console.log(person2.getDescription());

const traveller1 = new Traveller('Marjan', 30, 'London');
console.log(traveller1.getGreeting());

const traveller2 = new Traveller();
console.log(traveller2.getGreeting());