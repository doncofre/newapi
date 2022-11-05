import { Router, Request,Response } from 'express';
import carritoRouter from './carrito'
import itemRouter from './item'
import usuarioRouter from './usuario'

const router = Router();

router.use('/carrito',carritoRouter)
router.use('/item', itemRouter)
router.use('/usuario', usuarioRouter)

export default router;