const Hapi = require('@hapi/hapi');

import { HapiControllerAdapter } from './controllerAdapter'
import { LoadLinkController } from '../core/link/loadLinkController'
import { container } from '../../../di/dependencyContainer'

container.createLink.execute({
    originalLink: 'a',
    redirectLink: 'b',
    creationDate: new Date()
})

export const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/link',
        handler: HapiControllerAdapter.adapt(LoadLinkController.execute)
        // handler: ()=> 'fom;'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};
