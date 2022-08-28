import { describe, expect, test } from '@jest/globals';

import { core } from '../../../../src/core'
import { InMemoryDB } from '../../../../src/adapters/infra/inMemoryDB/db'
import { InMemoryCreateLinkRepository } from '../../../../src/adapters/link/repositories/inMemory.createLinkRepositoryImpl'

describe("Create Link", () => {
    test("creating link", () => {
        const db = new InMemoryDB()
        const repository = new InMemoryCreateLinkRepository(db)
        const useCase = new core.CreateLink(repository)
        
        const newLink = new core.CreateLinkInputPort('a', 'b')

        useCase.execute(newLink)

        const savedLink = db.load('links')[0]

        expect(savedLink).toEqual(newLink)
    })
})
