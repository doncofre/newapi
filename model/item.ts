import {model, Schema} from 'mongoose'
const productoSchema = new Schema(
{
    marca: String,
    nombre: String,
    codebar: String,
    precio: Number
})

export default model('Productos', productoSchema)
