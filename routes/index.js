import { Router } from 'express';
import simpleRoute from './simple.js';
const router = Router();

router.use('/simple', simpleRoute);

export default router;