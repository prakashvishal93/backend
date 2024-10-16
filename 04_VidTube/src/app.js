import express from 'express'
const app = express()
import cors from 'cors'

app.use(
    cors({
        origin : process.env.CROSS_ORIGIN,
        Credential : true
    })
)
// common middlewares
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded())
app.use(express.static('public'))



export {app}