import { createConnection } from 'mysql2';

console.log('It worked');

// create the connection to database
const connection = createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'world'
});

async function runQuery() {
	let results = await connection.promise().query('SELECT count(*) FROM city');
	console.log(results);
}

runQuery();