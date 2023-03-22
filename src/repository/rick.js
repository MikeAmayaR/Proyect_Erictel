'use strict';
module.exports = (sequelize, DataTypes) => {
    const Rick = sequelize.define('Rick',{
        id_rick: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: true,
            type: DataTypes.STRING
        },
        status: {
            allowNull: true,
            type: DataTypes.STRING
        },
        species: {
            allowNull: true,
            type: DataTypes.STRING
        },
        type: {
            allowNull: true,
            type: DataTypes.STRING
        },
        gender: {
            allowNull: true,
            type: DataTypes.STRING
        },
        image: {
            allowNull: true,
            type: DataTypes.STRING
        },

    },{
        freezeTableName: true,
        tableName: "Rick"
    });
    return Rick;
}