type Person = { name: string, age?: number};
type PersonKeys = keyof Person; // 'name' | 'age'
let person: Person = {
    name: 'John',
    age: 30
};


class Human {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

let human = new Human('John', 30);
console.log(human.getName()); // John
console.log(human.getAge()); // 30
