export class InMemoryDB {
    private memory: any = {}

    save(key: string, value: any): boolean {
        this.memory[key] = value;

        return true;
    }

    load(key: string): any {
        if (this.memory[key] == undefined)
            this.memory[key] = []

        return this.memory[key];
    }

    print() {
        console.log(this.memory)
    }
}