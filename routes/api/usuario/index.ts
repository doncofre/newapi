import {Router, Request, Response } from 'express'
import usuarioCtrl from '../../../controller/usuario'

const router = Router()
router.get('/:id', usuarioCtrl.traerUsuario)
router.post('/', usuarioCtrl.crearUsuario) //localhost:4000/api/usuaio/3128947829   req.params.id
router.put('/', usuarioCtrl.actualizarUsuario)
router.delete('/:id', usuarioCtrl.eliminarUsuario)
export default router


