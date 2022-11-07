import { Router, Request, Response } from "express";
import usuarioModel from '../model/usuario'


const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        res.send("traercarrito")

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