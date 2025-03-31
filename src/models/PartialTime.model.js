import database from "../config/database.config.js";
import { DataTypes } from "sequelize";

const PartialTime = database.define("partial_times",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field:"id"
    },
    testId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    testParticipantId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    
},
    {tableName:"partial_times",timestamps:true}
)

export default PartialTime