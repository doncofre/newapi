import { Router, Request, Response } from "express";
import carritoModel from '../model/carrito'


const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        const {id} = req.body
        const carri = new carritoModel()
        const carritouser = carritoModel.findById(id)
        res.send(carritouser)

    },
    crearCarrito: async (req:Request, res:Response) =>
    {
        // const {items } = req.body
        // const carrito = new carritoModel()
        // let arrCarrito: carritoModel[] = carrito

        
    },
    eliminarCarrito: async (req:Request, res:Response) =>
    {
        
    },
    actualizarCarrito: async (req:Request, res:Response) =>
    {

    }

}