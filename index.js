const dbConfing = require('../CONFIG/dbconfig');
const {Sequiulize, DataTypes} = require('sequilize');

const sequilize = new Sequilize(
    dbConfing.DB,
    dbConfing.USER,
    dbConfing.PASS, {
        host:dbConfing.HOST,
        dialect:dbConfing.dialect,
        operatorAliases:addListener,

    }  
)

try {
    sequilize.authenticate();
    console.log('la conexion ha sido establesida.');
}  catch (error) {
    console.error('unable to connect', error);
}

const db ={}
db.seqilize = Sequilize
db.sequilize = Sequilize

 db.productos = require('../models/productModel')(sequilize, DataTypes)
 db.requilize.sync({orce:false})
 module.exports