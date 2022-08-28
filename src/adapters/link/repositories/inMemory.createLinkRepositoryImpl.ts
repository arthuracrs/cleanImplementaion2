import { Link } from "../../../core/entities/link/Link";
import { ICreateLinkRepository } from "../../../core/link/ports/ICreateLinkRepository";
import { CreateLinkInputPort } from "../../../core/link/useCases/createLink/inputPort";
import { InMemoryDB } from "../../infra/inMemoryDB/db";

export class InMemoryCreateLinkRepository implements ICreateLinkRepository {
    private linksKey = 'links' 

    constructor(private db: InMemoryDB) { }

    save(link: CreateLinkInputPort): Link {

        const links = (this.db.load(this.linksKey)).push(link)

        return link;
    }
}