import 'reflect-metadata'
import express from 'express'
import cookieParser from 'cookie-parser'

import { MainRouter } from './src/common/router'
import { AppDataSource } from './utils/data/app.data-source'
import { errorMiddleware } from './utils/middleware/error.middleware'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(MainRouter)

app.use(errorMiddleware)

async function start() {
    try {
        const PORT = Number(process.env.APP_PORT)

        await AppDataSource.initialize()
        await AppDataSource.synchronize()

        app.listen(PORT, () => console.log('App is started'))
    } catch(e) {
        console.log(e)
    }
}

start()