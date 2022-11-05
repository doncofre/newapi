import express, {Express, Request, Response} from 'express'; // importo express y el tipo "express"
import bodyParser from 'body-parser'
import apiRouter from './routes/api/index'

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