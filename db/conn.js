const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database name', 'user', 'password', {
    host: '',
    dialect: 'mysql'
});

/* try {
    sequelize.authenticate();
    console.log('Conectamos com sucesso com o Sequelize!');
} catch (err) {
    console.log('Não foi possível conectar: ', error);
}; */

module.exports = sequelize;
