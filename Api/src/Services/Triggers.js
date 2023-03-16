import { Op } from "sequelize/lib/sequelize";
import { Articulos } from "../Models/Articulo";
import { Detalle_Venta } from "../Models/Detalle_Venta";
import { Fotos } from "../Models/Foto";

const DisminuirStockVenta=(idVenta)=>{

    // paso 1: traer todo los detalle perteneciente a ese idVenta al anular

    const buscarDetalles = Detalle_Venta.findAll({where:{
        ventaId:{[Op.eq]:idVenta}
    }})



    // paso 2: 


    console.log(buscarDetalles)
}

module.exports={DisminuirStockVenta}