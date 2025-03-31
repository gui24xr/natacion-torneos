import database from "../config/database.config.js";
import { DataTypes } from "sequelize";

const Test = database.define("tests",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field:"id"
    },
    eventId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    heat: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    lane: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    totalTime: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    
},
{tableName:"tests",timestamps:true}
)

export default Test
