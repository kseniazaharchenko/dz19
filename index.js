class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log();
    }
}

class Car {
    constructor(brand, model, year, plateNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plateNumber = plateNumber;
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("The owner must be at least 18 years old");
        }
    }

    getInfo() {
        console.log();
        this.owner.getInfo();
    }
}

// декілька екземплярів класу Людина
const person1 = new Person("John", 25);
const person2 = new Person("Mary", 30);

// декілька екземплярів класу Автомобіль
const car1 = new Car("Toyota", "Corolla", 2015, "AB1234", person1);
const car2 = new Car("Honda", "Civic", 2018, "BC5678", person2);

// присвоїти власників автомобілям
car1.owner = person2;
car2.owner = person1;

// вивести інформацію про автомобілі та їх власників
car1.getInfo();
car2.getInfo();
