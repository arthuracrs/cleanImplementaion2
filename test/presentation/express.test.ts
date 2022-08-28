import { describe, expect, test } from '@jest/globals';
import { agent } from 'supertest'

import { app } from '../../src/presentation/http/express/express'

const prefix = 'a'

describe("Express Test", () => {
    test("Route GET /hello", () => {
        agent(app)
            .get('/hello')
            .send()
            .end(function (err, res) {
                if (err) throw err;
                expect(res.text).toEqual('world')
            });
    })

    test("Route POST /a/createLink - check creation", async () => {
        const requestBody = { originalLink: 'a', redirectLink: 'http://instagram.com/arthurc_fom' }
        const res = await agent(app)
            .post(`/${prefix}/createLink`)
            .send(requestBody)

        expect(res.body).toHaveProperty('idLink')
        expect(res.body).toHaveProperty('creationDate')
        expect(res.body).toHaveProperty('originalLink')
        expect(res.body).toHaveProperty('redirectLink')
        expect(res.body.originalLink).toBe('a')
        expect(res.body.redirectLink).toBe('http://instagram.com/arthurc_fom')
    })

    test("Route GET / - checks redirect", async () => {
        const requestBody = { originalLink: 'a', redirectLink: 'http://instagram.com/arthurc_fom' }
        await agent(app)
            .post(`/${prefix}/createLink`)
            .set('Content-type', 'application/json')
            .send(requestBody)

        const res = await agent(app)
            .get('/' + requestBody.originalLink)

        expect(res.header['location']).toContain(requestBody.redirectLink)

    })

})
