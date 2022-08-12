export class InMemoryDB {
    private memory: any = {}

    save(key: string, value: any): boolean {
        this.memory[key] = value;

        return true;
    }

    load(key: string): any {
        return this.memory[key];
    }
}