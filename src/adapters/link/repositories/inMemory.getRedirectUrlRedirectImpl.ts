import { IGetRedirectLink } from "../../../core/link/ports/IGetRedirectUrl.repository";
import { InMemoryDB } from "../../infra/inMemoryDB/db";

export class InMemoryGetRedirectUrl implements IGetRedirectLink {
    linksKey = "links"
    constructor(private db: InMemoryDB) { }

    get(shortUrl: string): string {

        const links = this.db.load(this.linksKey)

        for (let i = 0; i < links.length; i++)
            if (links[i].originalLink === shortUrl)
                return links[i].redirectLink

        return ''
    }
}