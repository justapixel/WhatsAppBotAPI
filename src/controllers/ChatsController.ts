import { Response, Request } from 'express'
import WhatsAppClient from 'src/services/WhatsAppClient'

class ChatsController {
  async index (req: Request, res: Response) {
    const body = req.body
    const teste = await WhatsAppClient.client.getChats()
    return res.json(teste)
  }
}
export default ChatsController
