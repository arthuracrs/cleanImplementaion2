import express from 'express'
import { container } from '../../../di/dependencyContainer'
import { LoadLinkController } from '../core/link/loadLinkController'
import { ExpressControllerAdapter } from '../express/controllerAdapter'

const app = express()

container.createLink.execute({
  originalLink: 'a',
  redirectLink: 'b',
  creationDate: new Date()
})

app.get('/link', ExpressControllerAdapter.adapt(LoadLinkController.execute))

export { app }