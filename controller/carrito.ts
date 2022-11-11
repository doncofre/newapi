import { Router, Request, Response, response } from "express";
import carritoModel from '../model/carrito'
import itemModel from '../model/item'
import item from "./item";



const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        const id = req.params.id
        const carritousuario = carritoModel.findById(id)
        let arrcarrito: string[]
        let total: Number = 0
        carritousuario.productos.array.forEach(element => {
            
            const itemm = itemModel.findById(element)
            arrcarrito.push(item.nombre)
            total = total + item.precio
        });
        res.send({
            productos: arrcarrito,
            total = total
        })


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
                try
                {
                    productos.array.forEach(element => {
                        carry.productos.findIndex(element)
                        carry.productos.splice(element-1, 1)

                    });
                }
                catch
                {
                    console.log('error en el carrito')
                }
            }
        }
        else
        {
            res.send('carrito no encontrado')
        }
        
    }

}