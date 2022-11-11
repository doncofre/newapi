import { Router, Request, Response } from "express";
import carritoModel from '../model/carrito'
import itemModel from '../model/item'



const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        const id = req.params.id
        const carritousuario = carritoModel.findById(id)
        //carritousuario.productos.array.forEach(element => {
            
       // });
        const asd = {
            item1: "leche x3",
            item2: "aceite x1",
            total: 5000
        }


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
        res.send("Carrito eliminado")
    },
    actualizarCarrito: async (req:Request, res:Response) =>
    {
        //add bool V o F - Add or Sub items
        //idcarrito
        //arritems
        const productos = req.body.productos
        const carry = await carritoModel.findById(req.body.iduser)
        
        if(carry)
        {
            if(req.body.addBool == true)
            {
                try
                {
                    productos.array.forEach(element => 
                        {
                            carry.productos.push(element)
                        });
                }
                catch
                {
                    console.log('error en el carrito')
                }
                
                
            }
            else 
            {
    
            }
        }
        else
        {
            res.send('carrito no encontrado')
        }
        
    }

}