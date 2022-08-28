import { ILoadLinkByIdRepository } from '../../../core/link/ports/ILoadLinkById.repository';
import { InMemoryDB } from '../../infra/inMemoryDB/db';

export class InMemoryLoadLinkRepository implements ILoadLinkByIdRepository {
    private linksKey = 'links';

    constructor(private db : InMemoryDB){}

    load(id) {

        const links = this.db.load(this.linksKey)

        if (links == undefined){
            this.db.save(this.linksKey, [])
            return 'vazio';
        }

        for(let i = 0; i < links.length; i++){
            if(links[i].idLink == id) return links[i]
        }
        

        return 'não achado'
    }
}