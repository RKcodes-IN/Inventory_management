
const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db');
const User = db.dbConnection.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }, email: {
        type: DataTypes.STRING,
        allowNull: true
    }, password: {
        type: DataTypes.STRING,
        allowNull: true
    }, contact_no: {
        type: DataTypes.STRING,
        allowNull: true
    }, status: {
        type: DataTypes.STRING,
        allowNull: false
    }, createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    }, updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    freezeTableName: true
});

module.exports = User;
