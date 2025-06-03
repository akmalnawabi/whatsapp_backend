import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

// dotenv config 
dotenv.config();

// create express app 
const app = express();

// morgan 
if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

// helmet 
app.use(helmet())

// parse json req 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ExpressMongoSanitize 
app.use(mongoSanitize())

// cookieParser
app.use(cookieParser())

// compression
app.use(compression())

// fileUpload
app.use(fileUpload({
    useTempFiles: true
}))

// cors 
app.use(cors())


app.post('/test', (req, res) => {
    res.send(req.body)
})

export default app;