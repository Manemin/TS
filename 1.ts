class Human {
    weight: number
    height: number
    constructor( weight, height) {
        this.weight = weight;
        this.height = height;
    }
}

class Deputy extends Human {
    name: string;
    surname: string;
    age: number;
    bribeTaker: boolean;
    bribe: number;
    constructor(weight, height, name, surname, age, bribeTaker, bribe = 0 ) {
        super(weight, height);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.bribe = bribe;
    }
    toGiveBribe(sum: number) {
        if (this.bribeTaker) {
            if (sum > 20000) {
                Math.round(Math.random()) ? this.bribe += sum : console.log('No thanks');
            }
        } else {
            console.log('I\'m calling the Police!!!');
        }
    }
}

class Fraction {
    list: Object[] = [];
    addDeputy(deputy) {
        this.list.push(deputy);
    }
    delDeputy(name) {
        const i = this.list.indexOf(name);
        (i >= 0) ? this.list.splice(i, 1) : console.log('Not present');
    }
}

class Senate {
    group: Object[] = [];
    addGroup(name) {
        this.group.push(name);
    }
    delGroup(name) {
        const i = this.group.indexOf(name);
        (i >= 0) ? this.group.splice(i, 1) : console.log('Not present');
    }
    printAllGroup() {
        // this.group.forEach(el => console.log(el));
        console.log(this.group);
    }
}