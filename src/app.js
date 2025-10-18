import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/dbConnect.js'
import UserRoutes from './router/userRoutes.js'
dotenv.config()

const app = express()
app.use(express.json());
dbConnect().then(() => {
    console.log('db connected successfully');
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`server running on ${port}`);
    });
}).catch((error) => {
    console.log(`db connection failed ${error}`);
})

app.use("/api/user", UserRoutes());
