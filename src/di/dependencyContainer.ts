import { core } from '../core'

import {
    InMemoryCreateLinkRepository,
    InMemoryLoadLinkRepository
} from '../adapters/link/repositories'

import { InMemoryDB } from '../infra/inMemoryDB/db'

const db = new InMemoryDB()

const createLinkRepository = new InMemoryCreateLinkRepository(db)
const loadLinkRepitory = new InMemoryLoadLinkRepository(db)

export const container = {
    createLink: new core.CreateLink(createLinkRepository),
    loadLink: new core.LoadLink(loadLinkRepitory)
}