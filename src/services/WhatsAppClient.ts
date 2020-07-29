import { Client } from 'whatsapp-web.js'
import { PrismaClient } from '@prisma/client'
import qrcode from 'qrcode-terminal'

class WhatsAppClient {
  public client: Client

  constructor () {
    this.clientInit()
  }

  public async clientInit (): Promise<void> {
    const prisma = new PrismaClient()
    const { WABrowserId, WASecretBundle, WAToken1, WAToken2 } = await prisma.session.findOne({
      where: { id: 1 }
    })
    const waclient = new Client({
      session: { WABrowserId, WASecretBundle, WAToken1, WAToken2 }
    })
    waclient.on('auth_failure', msg => {
      waclient.on('qr', (qr) => {
        // NOTE: This event will not be fired if a session is specified.
        qrcode.generate(qr, { small: true })
      })
      waclient.on('authenticated', (session) => {
        console.log(session)
      })
    })
    waclient.on('ready', async () => {
      console.log('READY')
    })

    await waclient.initialize()
    this.client = waclient
  }
}

export default new WhatsAppClient()
