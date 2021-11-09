import { app } from './app.js';
import mongoose from 'mongoose';
import list from "express-list-endpoints"

const port = process.env.PORT || 3002

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Mongo locally")
    app.listen(port, () => {
        console.log("Server is running on port " + process.env.PORT)
        console.log(list(app))
    })
})