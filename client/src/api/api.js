import axios from '../axios';

export const fetchPosts = () => axios.get('/');
export const createPost = (newPost) => axios.post('/', newPost);
export const likePost = (id) => axios.patch(`/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/${id}`);