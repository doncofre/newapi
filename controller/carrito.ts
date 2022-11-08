import { Router, Request, Response } from "express";
import carritoModel from '../model/carrito'


const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        const id = req.params.id
        const carritousuario = carritoModel.findById(id)
        //carritousuario.productos.array.forEach(element => {
            
       // });

    },
    crearCarrito: async (req:Request, res:Response) =>
    {
        var mongoose = require('mongoose')
        const iduser = mongoose.Types.ObjectId(req.params.iduser)
        const buscocarrito = await carritoModel.find({iduser: iduser})
        if(buscocarrito.length !== 0)
        {
            res.status(400)
            res.send("El carrito ya existe. ID" + buscocarrito[0].id )
            
        }
        else
        {
            const nuevocarrito = new carritoModel()
            nuevocarrito.iduser = iduser
            res.status(200)
            res.send("Carrito creado con exito. ID:" + nuevocarrito.id)
        }
    },
    eliminarCarrito: async (req:Request, res:Response) =>
    {
        const id = req.params.id
        await carritoModel.findByIdAndDelete(id)
        res.send("producto eliminado")
    },
    actualizarCarrito: async (req:Request, res:Response) =>
    {
        await res.send("asd")
    }

}