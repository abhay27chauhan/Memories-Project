import express from 'express';

import { signin, signup } from '../controllers/user'

const router = express.router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;