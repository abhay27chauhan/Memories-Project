import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

import connectDB from './config/db.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT|| 5000;

connectDB();

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})