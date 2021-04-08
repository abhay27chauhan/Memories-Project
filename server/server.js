import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

import connectDB from './config/db.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/', (req, res) => res.status(200).send("Hello Word!!"));
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT|| 5000;

connectDB();

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})