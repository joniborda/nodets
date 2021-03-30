import cookieParser from 'cookie-parser'
import express from 'express'
import middleware from './middleware'
import routes from './routes'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.use('/v1', routes);

app.use(middleware.error404Handler);
app.use(middleware.errorHandler);


export default app