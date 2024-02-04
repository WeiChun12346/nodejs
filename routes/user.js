import { Router } from 'express';
import { create, update, getUsers, getUser, remove } from '../controllers/userController.js';
const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
