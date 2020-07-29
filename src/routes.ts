import express from 'express'
import ChatsController from '@controllers/ChatsController'

const routes = express.Router()

const session = new ChatsController()
console.log('aaa')

routes.get('/getchats', session.index)
routes.get('/isvalid', session.isValid)

export default routes
