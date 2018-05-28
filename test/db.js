import '@babel/polyfill';

import test from 'ava';
import sequelize from './../src/server/sequelize';

test.before('sequelize synchronizes', async t => {
	await sequelize.sync();
	t.pass();
});

test.after.always('sequelize stops', async t => {
	await sequelize.close();
	t.pass();
});
