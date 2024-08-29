export class Person {
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