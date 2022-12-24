import express from 'express'
import connection from './connection.js'
import cors from 'cors'
import logger from 'morgan'
import routes from './routes/index.js'

const app = express();
const PORT = 3000


app.use(cors())
app.use(logger('dev'))

app.use('/api', routes)


    app.listen(PORT, ()=> {
        console.log(`Express server is running in development on http://localhost:${PORT}`)
    })

