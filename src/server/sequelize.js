import Sequelize from 'sequelize';

const sequelize = new Sequelize({
	logging: false,
	dialect: 'sqlite',
	storage: './db/db.sqlite',
	operatorsAliases: false
});

export default sequelize;
