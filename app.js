import  express from 'express';
import cors from 'cors';
// conexion a base de datos
import db from './database/db.js';
// importar enritadores
import BlogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/pedido', BlogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a db')
} catch (error) {
    console.log('Erro a db')
}

app.listen (8000, ()=>{
    console.log('Server up running in http://localhost:8000/')
})




