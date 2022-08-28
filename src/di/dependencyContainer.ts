import { core } from '../core'

import {
    InMemoryCreateLinkRepository,
    InMemoryLoadLinkRepository,
    InMemoryGetRedirectUrl
} from '../adapters/link/repositories'

import { InMemoryDB } from '../adapters/infra/inMemoryDB/db'

export const containerFactory = () => {
    const db = new InMemoryDB()

    const createLinkRepository = new InMemoryCreateLinkRepository(db)
    const loadLinkRepository = new InMemoryLoadLinkRepository(db)
    const getRedirectUrl = new InMemoryGetRedirectUrl(db)

    const container = {
        createLinkInputPort: core.CreateLinkInputPort,
        getRedirectUrl: new core.GetRedirectLink(getRedirectUrl),
        createLink: new core.CreateLink(createLinkRepository),
        LoadLinkById: new core.LoadLinkById(loadLinkRepository)
    }

    return container
}

