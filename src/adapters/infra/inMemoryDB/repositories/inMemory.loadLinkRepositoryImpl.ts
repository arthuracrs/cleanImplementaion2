import { ILoadLinkRepository } from '../../../../core/link/ports/ILoadLinkRepository';
import { InMemoryDB } from '../db';

export class InMemoryLoadLinkRepository implements ILoadLinkRepository {
    private linksKey = 'links';

    constructor(private db : InMemoryDB){}

    load(id) {

        const links = this.db.load(this.linksKey)

        if (links == undefined){
            this.db.save(this.linksKey, [])

            return false;
        }

        for(let i = 0; i < links.length; i++){
            if(links[i].linkId == id) return links[i]
        }
        

        return false
    }
}