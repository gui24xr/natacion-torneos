import database from "../config/database.config.js";
import { DataTypes } from "sequelize";

const Tournament = database.define("tournaments",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field:"id"
    },  
    name: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
},
{tableName:"tournaments",timestamps:true})

export default Tournament
