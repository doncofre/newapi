import {Router, Request, Response } from 'express'
import carritoCtrl from '../../../controller/carrito'

const router = Router()
router.get('/', carritoCtrl.traerCarrito)

export default router