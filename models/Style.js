const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Style extends Model {}

Style.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        style_name: {
            type: DataTypes.STRING,
            allNull: false,
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'style',
    }
);

module.exports = Style;