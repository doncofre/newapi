import { Router, Request, Response, response } from "express";
import carrito from "../model/carrito";
import carritoModel from '../model/carrito'
import itemModel from '../model/item'
import item from "./item";



const router = Router()

export default 
{
    traerCarrito: async (req:Request, res:Response) => 
    {
        var mongoose = require('mongoose');
        const id = req.params.id
        const carritousuario = await carritoModel.findById(id)
        console.log(id)
        console.log(carritousuario?.id)
        //////////////////
        let arr: string[] = []
        let total: number = 0
        ////////////////
        if (id && carritousuario)
        {
            for (let index = 0; index < carritousuario.productos.length; index++) 
            {
                const idproduc = carritousuario.productos[index];
                const producto = await itemModel.findById(idproduc)
                const nombreproducto = producto?.nombre
                const precioproducto = producto?.precio
                if (nombreproducto && precioproducto)
                {
                    arr.push(nombreproducto)
                    total = total + precioproducto
                }
                
            }
            //arr.sort()
            res.statusCode = 200
            res.send({arr,total})

        }
        else
        {
            res.send("la concha de tu madre")
        }
       



    },
    crearCarrito: async (req:Request, res:Response) =>
    {
        console.log("hola")
        var mongoose = require('mongoose')
        const striduser = req.params.id
        const iduser = mongoose.Types.ObjectId(striduser)
        console.log(iduser)
        
        try
        {
            console.log(striduser)
            const buscocarrito = await carritoModel.find({iduser: striduser})
            console.log(buscocarrito)
            
            if(buscocarrito.length !== 0)
            {
                res.status(400)
                res.send("El carrito ya existe. ID:" + buscocarrito[0].id )
                
            }
            else
            {
                const nuevocarrito = new carritoModel()
                nuevocarrito.iduser = iduser
                nuevocarrito.productos = []
                nuevocarrito.save()
                res.status(200)
                res.send("Carrito creado con exito"/*. ID:" + nuevocarrito.id*/)
            }
        }
        catch
        {
            res.send("rompió flaco")
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
                // try
                // {
                //     productos.array.forEach(element => 
                //         {
                //             carry.productos.push(element)
                //         });
                // }
                // catch
                // {
                //     console.log('error en el carrito')
                // }
                
                
            }
            else 
            {
                // try
                // {
                //     productos.array.forEach(element => {
                //         carry.productos.findIndex(element)
                //         carry.productos.splice(element-1, 1)

                //     });
                // }
                // catch
                // {
                //     console.log('error en el carrito')
                // }
            }
        }
        else
        {
            res.send('carrito no encontrado')
        }
        
    }

}