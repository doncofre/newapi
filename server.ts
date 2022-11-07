import express, {Express, Request, Response} from 'express'; // importo express y el tipo "express"
import bodyParser from 'body-parser'
import apiRouter from './routes/api/index'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()


const app: Express = express(); 


app.use(express.json({limit: "10mb"}))
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRouter)

// app.get('/', (req,res) =>
// {
//     res.send('get')
// })

app.listen(4000, () =>
    {
        console.log('conectado');
        
    })

conectarDB()
    .then(()=> 
    {
        console.log('conectado')
    })
    .catch(()=>
    {
        console.log('no se pudo conectar')
    })

async function conectarDB() 
{
    if(process.env.MONGOOSE_CONNECTION_STRING)
    {
        mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
    }
    else
    {
        console.log('CONEXION INVALIDA')
    }
    
}