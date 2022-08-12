import { Link } from "../../../core/link/entities/link/Link";
import { ICreateLinkRepository } from "../../../core/link/ports/ICreateLinkRepository";
import { InMemoryDB } from "../../../infra/inMemoryDB/db";

export class InMemoryCreateLinkRepository implements ICreateLinkRepository {
    private linksKey = 'links' 

    constructor(private db: InMemoryDB) { }

    save(link: Link): Link | boolean {
        if (this.db.load(this.linksKey) == undefined){
            this.db.save(this.linksKey, [])
        }

        const links = (this.db.load(this.linksKey)).push(link)

        return true;
    }
}