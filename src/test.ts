/*
const a = ["Hello World"];

const array = [];

array.push(a);

console.log(array);
*/

interface Credentials {
    email: string;
    password: string;
}

const access: Credentials = {
    email: '',
    password: ''
};

interface IPersona {
    setName(name: string): void;
    getName(): string;
}

class Persona implements IPersona {
    private name: string = '';

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const a = new Persona();
a.setName('Hello World');
a.getName();