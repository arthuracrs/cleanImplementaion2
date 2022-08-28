import { describe, expect, test } from '@jest/globals';

import { core } from '../../../../src/core'
import { adapters } from '../../../../src/adapters'
import { InMemoryDB } from '../../../../src/adapters/infra/inMemoryDB/db'

describe("Get redirect Url", () => {
    test("Get redirect Url - link exists", () => {
        const db = new InMemoryDB()
        const createLinkRepository = new adapters.InMemoryCreateLinkRepository(db)
        const createLinkUseCase = new core.CreateLink(createLinkRepository)

        const getRedirectUrlRepository = new adapters.InMemoryGetRedirectUrl(db)
        const getRedirectUrlUseCase = new core.GetRedirectLink(getRedirectUrlRepository)

        const linkToBeSaved = new core.CreateLinkInputPort('a', 'b')
        createLinkUseCase.execute(linkToBeSaved)

        const redirectUrl = getRedirectUrlUseCase.execute(linkToBeSaved.originalLink)

        expect(linkToBeSaved.redirectLink).toEqual(redirectUrl)
    })

    test("Get redirect Url - link doesn't", () => {
        const db = new InMemoryDB()

        const getRedirectUrlRepository = new adapters.InMemoryGetRedirectUrl(db)
        const getRedirectUrlUseCase = new core.GetRedirectLink(getRedirectUrlRepository)

        const linkNotExists = 'notexits.com'

        const redirectUrl = getRedirectUrlUseCase.execute(linkNotExists)

        expect(redirectUrl).toEqual('')
    })
})
