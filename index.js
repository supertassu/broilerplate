import '@babel/polyfill';

import server from './src/server/server';
import db from './src/server/sequelize';

db.sync().then(() => {
	server.listen(process.env.PORT || 3000);
	console.log(`Listening at ${process.env.PORT || 3000}`);
});
