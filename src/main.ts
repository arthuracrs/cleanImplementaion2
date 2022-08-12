import { core } from './core'

import {
    InMemoryCreateLinkRepository,
    InMemoryLoadLinkRepository
} from './adapters/infra/inMemoryDB/repositories'

import { InMemoryDB } from './adapters/infra/inMemoryDB/db'

const db = new InMemoryDB()

const createLinkRepository = new InMemoryCreateLinkRepository(db)
const loadLinkRepitory = new InMemoryLoadLinkRepository(db)

const createLink = new core.CreateLink(createLinkRepository)
const loadLink = new core.LoadLink(loadLinkRepitory)

createLink.execute(new core.CreateLinkInputPort('a', 'b', new Date()))
console.log(loadLink.execute('link02'))
// db.print()