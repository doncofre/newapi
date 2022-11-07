import { Router, Request, Response } from "express";
import carritoModel from '../model/carrito'


const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        // const id = req.params.id
        // const carritouser = await carritoModel.findById(id)
        // res.send(carritouser)
        await res.send("asd")

    },
    crearCarrito: async (req:Request, res:Response) =>
    {
        // const {items } = req.body
        // const carrito = new carritoModel()
        // let arrCarrito: carritoModel[] = carrito

        await res.send("asd")
    },
    eliminarCarrito: async (req:Request, res:Response) =>
    {
        await res.send("asd")
    },
    actualizarCarrito: async (req:Request, res:Response) =>
    {
        await res.send("asd")
    }

}