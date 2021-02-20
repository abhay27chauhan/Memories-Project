import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try{
        const postMessages  = await PostMessage.find();

        res.status(200).json(postMessages);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try{
        const post  = await PostMessage.find(id);

        res.status(200).json(post);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}