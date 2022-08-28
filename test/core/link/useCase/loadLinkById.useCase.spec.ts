import crypto from 'crypto'
import { describe, expect, test } from '@jest/globals';

import { core } from '../../../../src/core'
import { InMemoryDB } from '../../../../src/adapters/infra/inMemoryDB/db'
import { InMemoryLoadLinkRepository } from '../../../../src/adapters/link/repositories/inMemory.loadLinkRepositoryImpl'
import { InMemoryCreateLinkRepository } from '../../../../src/adapters/link/repositories/inMemory.createLinkRepositoryImpl'

describe("Load Link by id", () => {
    test("loading link - link exists", () => {
        const db = new InMemoryDB()
        const loadLikByIdrepository = new InMemoryLoadLinkRepository(db)
        const loadLikByIdUseCase = new core.LoadLinkById(loadLikByIdrepository)
        const createLinkRepository = new InMemoryCreateLinkRepository(db)
        const createLinkUseCase = new core.CreateLink(createLinkRepository)

        const linkToBeSaved = new core.CreateLinkInputPort('a', 'b')
        createLinkUseCase.execute(linkToBeSaved)

        const loadedLink = loadLikByIdUseCase.execute(linkToBeSaved.idLink)

        expect(linkToBeSaved).toEqual(loadedLink)
    })

    test("loading link - link doesn't", () => {
        const db = new InMemoryDB()
        const loadLikByIdrepository = new InMemoryLoadLinkRepository(db)
        const loadLikByIdUseCase = new core.LoadLinkById(loadLikByIdrepository)
        const createLinkRepository = new InMemoryCreateLinkRepository(db)
        const createLinkUseCase = new core.CreateLink(createLinkRepository)

        const linkToBeSaved = new core.CreateLinkInputPort('a', 'b')
        createLinkUseCase.execute(linkToBeSaved)

        const randomIdLink = crypto.randomUUID()

        const loadedLink = loadLikByIdUseCase.execute(randomIdLink)

        expect(loadedLink).toEqual('não achado')
    })
})
