import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const BlogModel = db.define('solicituds',{
    
    Nombre: { type: DataTypes.STRING },
    Telefono: { type: DataTypes.STRING },
    Direccion: { type: DataTypes.STRING },
    Metodo_P: { type: DataTypes.STRING },
    comentario: { type: DataTypes.TEXT },
})

export default BlogModel