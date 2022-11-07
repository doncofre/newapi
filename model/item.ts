import {model, Schema} from 'mongoose'
const productoSchema = new Schema(
{
    marca: String,
    nombre: String,
    codebar: String
})

export default model('Productos', productoSchema)
