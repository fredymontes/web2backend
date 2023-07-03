import BlogModel from '../models/BlogModel.js'
//Metodos para el CRUD
// mostrar todos los registros
export const  getAll= async ( req, res ) => {
    try {
      const pedidos= await BlogModel.findAll()
      res.json(pedidos)
    } catch (error) {
        res.json ({ message: error.message})
    }
}
// mostrar un registro
export const getPedido = async ( req, res) => {
    try {
        const pedido= await BlogModel.findAll({
            where:{ id: req.params.id}
        })
        res.json(pedido[0])
    } catch (error) {
        res.json ({ message: error.message})
    }
}

// crear un registro

export const crearPedido = async (req, res)=> {
    try {
        await BlogModel.create(req.body)
        res.json({ 'message': 'Registro creado correctamente'})
    } catch (error) {
        res.json ({ message: error.message})
    }
}

// actualizar un registro

export const updatePedido = async ( req, res ) => {
    try {
         await BlogModel.update (req.body, {
            where: {id: req.params.id}
         })
         res.json({ 'message': 'Registro actualizado correctamente'})
    } catch (error) {
        res.json ({ message: error.message})
    }
}

// eliminar un registro

export const deletePedido = async ( req, res )=>{
    try {
        BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Registro eliminado correctamente'})
    } catch (error) {
        res.json ({ message: error.message})
    }
}


