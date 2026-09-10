import Express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})