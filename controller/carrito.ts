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
                const marcaproducto = producto?.marca
                const codebarproducto = producto?.codebar
                if (nombreproducto && precioproducto)
                {
                    arr.push("MARCA: " + marcaproducto + "  MODELO: " + nombreproducto + "  PLU: " +codebarproducto + "  PRECIO: "+precioproducto.toString())
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
        var mongoose = require('mongoose')
        const productos = req.body.productos
        const carry = await carritoModel.findById(req.body.id)
        
        if(carry)
        {
            

            if(req.body.addBool == true && req.body.productos.length>0)
            {
                // let arr: string[] = [] 
                // carry.productos.forEach(element => {
                // arr.push(element)

                // productos?.forEach(element => {
                //     arr.push(element)
                // });

                // carritoModel.findByIdAndUpdate(req.body.id ,{
                //     iduser: carry?.iduser,
                //     productos: arr

                // })
                // carry.save()
                // res.status(200).send("Agregados con exito")
                // });
            }
            else if(req.body.addBool == false && req.body.productos.length>0)
            {
                // let arr: string[] = [] 
                // carry.productos.forEach(element => {
                // arr.push(element)

                // productos?.forEach(element => {
                //     const indeof= arr.indexOf(element)
                //     arr.splice(indeof,1)
                // });

                // carritoModel.findByIdAndUpdate(req.body.id ,{
                //     iduser: carry?.iduser,
                //     productos: arr

                // })
                // carry.save()
                // res.status(200).send("quitados con exito")
                // });
            }
        }
        else
        {
            res.send('error en el carrito')
        }
        
    }

}