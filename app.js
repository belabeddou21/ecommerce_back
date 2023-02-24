import express from 'express';
import mongoose from 'mongoose';
import userRoute from './Routes/User-Route.js'
import ProductRoute from './Routes/Product-route.js';
import CarteRoute from './Routes/Carte-route.js';
import cors from 'cors';
import OderRoute from './Routes/Oder-route.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/product',ProductRoute);
app.use('/api/carte',CarteRoute);
app.use('/api/order',OderRoute);

mongoose.connect(
   `mongodb+srv://walid2912:${process.env.DB_PASS}@cluster0.nf1xurb.mongodb.net/ecommerce_db?retryWrites=true&w=majority`
    ).then(()=>
        app.listen(process.env.PORT)
    ).then(()=>console.log('Connected to dB and listening to localhohst')).catch((err)=>
    console.log(err));
    mongoose.set('strictQuery', false);
