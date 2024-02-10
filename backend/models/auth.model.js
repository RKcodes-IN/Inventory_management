
const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db');
const Auth = db.dbConnection.define('auth', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }, auth_key: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    freezeTableName: true
});

module.exports = Auth;
