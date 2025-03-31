import './config/dotenv.js'
import { syncAndConnectDatabase } from './models/index.models.js'
import server from './server.js'

await syncAndConnectDatabase()
server.start()

