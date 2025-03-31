import database from "../config/database.config.js";
import { DataTypes } from "sequelize";

const Swimmer = database.define("swimmers",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field:"id"
    },
    dni: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique:true,
    },
    firstName: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('M','F'),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique:true,
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique:true,
    },
},
{tableName:"swimmers",timestamps:true}
)

export default Swimmer

