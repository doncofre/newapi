import {Router, Request, Response } from 'express'
import carritoCtrl from '../../../controller/carrito'

const router = Router()
router.get('/', carritoCtrl.traerCarrito)
router.post('/', carritoCtrl.crearCarrito)
router.put('/', carritoCtrl.actualizarCarrito)
router.post('/', carritoCtrl.eliminarCarrito)
export default router