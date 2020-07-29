import { Response, Request } from 'express'
import WhatsAppClient from 'src/services/WhatsAppClient'

class ChatsController {
  async index (req: Request, res: Response) {
    const body = req.body
    const teste = await WhatsAppClient.client.getChats()
    return res.json(teste)
  }

  async isValid (req: Request, res: Response) {
    const phone = req.query.phone
    const phoneId = `${phone}@c.us`
    const isValid = await WhatsAppClient.client.isRegisteredUser(phoneId)
    return res.json(isValid)
  }
}
export default ChatsController
