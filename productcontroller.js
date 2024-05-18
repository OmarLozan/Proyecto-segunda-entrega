const db = require('../model/index');


const Producto = db.productos;
//crea producto

module.exports = {
    create : async function(req,res) {
        try{ 
            const {nomre, descripcion, precio } = req.body;
            await Producto.create({nombre, descripcion, precio });

             res.send('Resgistro guardado exitosamente');
        }
        catch (error){
            console.error(error);
            res.status(500).send('error creating usar');
        }
    },
};