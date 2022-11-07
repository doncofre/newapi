import {model, Schema} from 'mongoose'
const carritoSchema = new Schema({
    iduser: {type: Schema.Types.ObjectId, ref: 'User'},
    productos:[{type: Schema.Types.ObjectId, ref: 'Productos'}]
})

export default model('Carrito', carritoSchema)
