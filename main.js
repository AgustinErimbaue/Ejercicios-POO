const namePerson = document.getElementById('person-name');
const agePerson = document.getElementById('person-age');
const genderPerson = document.getElementById('person-gender');
const course = document.getElementById("course")
const group = document.getElementById("group")
const subject = document.getElementById('subject');
const level = document.getElementById('level')



class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    obtDetails() {
        namePerson.innerText = `Su nombre es ${this.name}`
        agePerson.innerText = `Su edad es de ${this.age}`
        genderPerson.innerText = `Su genero es ${this.gender}`
    }
}

let mySelf = new Person('Agustin', '30', 'Masculino')

mySelf.obtDetails()

class Student extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender)
        this.course = course;
        this.group = group;
    }
    register() {
        course.innerText = `Esta en el curso de:${this.course}`
        group.innerText = `Grupo: ${this.group}`
    }
};

let student1 = new Student('Agustin', '30', 'Masculino', 'FullStack', 'Tarde')

student1.register()


class Teacher extends Person {
    constructor(name, age, gender, subject, level) {
        super(name, age, gender)
        this.subject = subject;
        this.level = level;
    }
    assign() {
        subject.innerText = `Asignatura:${this.subject}`;
        level.innerText = `Nivel:${this.level}`
    }
}

let teacher1 = new Teacher('Agustin', '30', 'Masculino', 'FullStack', 'Tarde', 'Js', 'Universitario')
teacher1.assign()

//Extras

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log("Vida restante:", this.life);
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColaCao() {
        this.power += 10;
        console.log("Poder aumentado en 10:", this.power);
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik() {
        this.life += 10;
        console.log("Vida aumentada en 10:", this.life);
    }
}


const mayaWarrior = new Maya(100, 20);
const aztecWarrior = new Aztec(150, 25);


aztecWarrior.drinkNesquik();

mayaWarrior.drinkColaCao();


const damageToAztec = mayaWarrior.attack();
aztecWarrior.defend(damageToAztec);


const damageToMaya = aztecWarrior.attack();
mayaWarrior.defend(damageToMaya);
