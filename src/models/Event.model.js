import database from "../config/database.config.js";
import { DataTypes } from "sequelize";

const Event = database.define("events",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field:"id"
    },
    stageId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(40), 
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    stroke: {
        type: DataTypes.ENUM('crawl','butterfly','backstroke','breaststroke','medley'),
        allowNull: false,
    },
    type:{
        type: DataTypes.ENUM('individual','relay'),
        allowNull: false,
    },
    distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
},
{tableName:"events",timestamps:true}
)

export default Event
