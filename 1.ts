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
    };
    delDeputy(name: string) {
        // const find = dep => dep.surname;
        // const i = this.list.map(find).indexOf(name);
        const i = this.list.findIndex(dep => dep.surname === name)
        (i >= 0) ? this.list.splice(i, 1) : console.log(`Deputy '${name}' not present`);
    };
    delAllBribeTaker() {
        const find = dep => dep.bribeTaker === 'true';
        this.list = this.list.filter(find);
    };
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

const l = new Deputy(80, 170, 'oleg', 'la', 48, true, 1000)
const t = new Deputy(80, 170, 'ul', 'ti', 50, true, 10000);
const a = new Deputy(80, 170, 'pp', 'pp', 50, false);
const rad = new Fraction();

rad.addDeputy(l);
rad.addDeputy(t);
rad.addDeputy(a);

rad.delAllBribeTaker();
console.log(rad);



