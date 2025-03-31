
import database from "../config/database.config.js";
import Swimmer from "./Swimmer.model.js";
import Tournament from "./Tournament.model.js";
import Stage from "./Stage.model.js";
import Event from "./Event.model.js";
import Test from "./Test.js";
import TestParticipant from "./TestParticipant.js";
import PartialTime from "./PartialTime.js";


let DB_IS_CONNECTED = false
database.sync({alter:true})

async function syncAndConnectDatabase(){
    if (DB_IS_CONNECTED){
        console.log('La conexion a la base de datos se encuentra conectada...')
        return
    }  

    try{
        await database.authenticate()
        DB_IS_CONNECTED = true
        console.log('La conexion a la base de datos ah sido abierta...')
    }catch(error){
        console.log(error)
        throw(error)
    }
}


export {
   
    syncAndConnectDatabase

}
