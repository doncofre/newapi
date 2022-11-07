import {Router, Request, Response } from 'express'
import itemCtrl from '../../../controller/item'
const router = Router()
router.get('/', itemCtrl.traerCarrito)
router.post('/', itemCtrl.crearCarrito)
router.put('/', itemCtrl.actualizarCarrito)
router.post('/', itemCtrl.eliminarCarrito)
export default router



