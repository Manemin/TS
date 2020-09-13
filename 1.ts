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

interface Deputy {
    name: string;
    surname: string;
    age: number;
    bribeTaker: boolean;
    bribe: number;
    weight : number;
    height: number;
}

class Fraction {
    list: Array<Deputy> = [];
    addDeputy(deputy) {
        this.list.push(deputy);
    };
    delDeputy(name: string) {
        const i = this.list.map(dep => dep.surname).indexOf(name);
        // const i = this.list.findIndex(dep => dep.surname === name);
        (i >= 0) ? this.list.splice(i, 1) : console.log(`Deputy '${name}' not present`);
    };
    delAllBribeTaker() {
        const find = dep => dep.bribeTaker === false;
        this.list = this.list.filter(find);
    };
    maxBribe() {
        // const bribe = (res, dep) => res = Math.max(res, dep.bribe);
        const max = this.list.reduce((res, dep) => res = Math.max(res, dep.bribe), 0);
        console.log(this.list.filter(dep => dep.bribe === max));
    };
    listDeputy() {
        console.log(this.list);
    };
    delAll() {
        this.list = [];
    };
    sumOfBribe() {
        const sum = this.list.reduce((res, dep) => res += dep.bribe, 0);
        console.log(sum)
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
rad.sumOfBribe();
// console.log(rad);