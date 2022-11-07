import {Router, Request, Response } from 'express'
import usuarioCtrl from '../../../controller/usuario'

const router = Router()
router.get('/', usuarioCtrl.traerCarrito)
router.post('/', usuarioCtrl.crearCarrito)
router.put('/', usuarioCtrl.actualizarCarrito)
router.post('/', usuarioCtrl.eliminarCarrito)
export default router


