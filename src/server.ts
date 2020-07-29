import app from './app'
import WhatsAppClient from './services/WhatsAppClient'

async function Init () {
  const waclient = await WhatsAppClient.clientInit()
  app.listen(3333)
}
Init()
