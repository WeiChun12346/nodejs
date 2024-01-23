import { Router } from 'express';
import { create, update, getSimple, remove } from '../controllers/simpleController.js';
const router = Router();

router.get('/', getSimple);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
