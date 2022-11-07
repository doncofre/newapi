import {Router, Request, Response } from 'express'
import usuarioCtrl from '../../../controller/usuario'

const router = Router()
router.get('/:id', usuarioCtrl.traerUsuario)
router.post('/', usuarioCtrl.crearUsuario)
router.put('/', usuarioCtrl.actualizarUsuario)
router.delete('/:id', usuarioCtrl.eliminarUsuario)
export default router


