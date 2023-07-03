import  express from 'express';
import { getAll, getPedido, crearPedido, updatePedido, deletePedido } from "../controllers/BlogControllers.js";

const router =express.Router();
router.get('/', getAll)
router.get('/:id', getPedido)
router.post('/', crearPedido)
router.put('/:id',updatePedido)
router.delete('/:id', deletePedido)

export default router
