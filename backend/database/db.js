const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('savinco', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }

})

module.exports = sequelize;