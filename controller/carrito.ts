import { Router, Request, Response } from "express";
import carritoModel from '../model/carrito'


const router = Router()

export default 
{
    traerCarrito: (req:Request, res:Response) => 
    {
        const {id} = req.body
        const carri = new carritoModel()
        const carritouser = carritoModel.findById(id)
        res.send(carritouser)

    },
    crearCarrito: (req:Request, res:Response) =>
    {
        // const {items } = req.body
        // const carrito = new carritoModel()
        // let arrCarrito: carritoModel[] = carrito

        
    },
    eliminarCarrito: (req:Request, res:Response) =>
    {
        
    },
    actualizarCarrito: (req:Request, res:Response) =>
    {

    }

}