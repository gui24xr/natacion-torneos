import database from "../config/database.config.js";
import { DataTypes } from "sequelize";

const TestParticipant = database.define("test_participants",{
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
    swimmerId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
      

},
{tableName:"test_participants",timestamps:true}
)

export default TestParticipant
