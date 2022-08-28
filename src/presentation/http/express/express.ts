import express from 'express'
import { containerFactory } from '../../../di/dependencyContainer'

const app = express()
app.use(express.json())

const container = containerFactory()
const prefix = 'a'

app.get('/hello', (req, res)=> res.send('world'))

app.post(`/${prefix}/createLink`, (req, res) => {
  const { originalLink, redirectLink } = req.body

  const newLink = container.createLink.execute(new container.createLinkInputPort(originalLink, redirectLink))
  
  res.json(newLink)
})

app.get('/:redirect', (req, res) => {
  const { redirect } = req.params

  const redirectTo = container.getRedirectUrl.execute(redirect)

  res.redirect(redirectTo)
})

export { app }