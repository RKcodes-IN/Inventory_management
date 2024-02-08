const { Sequelize } = require("sequelize");

const dbConnection = new Sequelize('inventory_management', 'postgres', '123', {
    host: "localhost",
    dialect: "postgres",
});

module.exports = { dbConnection }