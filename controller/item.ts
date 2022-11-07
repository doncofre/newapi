import { Router, Request, Response } from "express";
import itemModel from '../model/item'


const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        const productoss = new itemModel()
        const todoslosproductos = await itemModel.find({})
        res.send(todoslosproductos)
    },
    crearCarrito: async (req:Request, res:Response) =>
    {
        // const {items } = req.body
        // const carrito = new carritoModel()
        // let arrCarrito: carritoModel[] = carrito

        
    },
    eliminarCarrito: async (req:Request, res:Response) =>
    {
        const {id} = req.body
        const query = {_id: id}
        await itemModel.findOneAndDelete(query)
        
        res.statusCode = 200
        res.send("eliminado")

    },
    actualizarCarrito: async (req:Request, res:Response) =>
    {
        const {id,marca,nombre,codebar} = req.body
        const query = {_id: id}
        const nuevosvalores = 
        {
            $set:
            {
                marca: marca,
                nombre:nombre,
                codebar:codebar
            }
        }
        itemModel.updateOne(query,nuevosvalores)
    }

}