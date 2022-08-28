import { describe, expect, test } from '@jest/globals';
import { agent } from 'supertest'

import { app } from '../../src/presentation/http/express/express'

describe("Express Test", () => {
    test("Test Express - Route GET /hello", () => {
        agent(app)
            .get('/hello')
            .send()
            .end(function (err, res) {
                if (err) throw err;
                expect(res.text).toEqual('world')
            });
    })
})
