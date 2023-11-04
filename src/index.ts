import { createConnection } from 'mysql2';

// create the connection to database
const connection = createConnection({
	host: 'localhost',
	user: 'root',
	password: '****',
	database: 'world'
});

async function runQuery() {
	let results = await connection.promise().query('SELECT count(*) FROM city');
	console.log(results);

	await connection.promise().execute(`insert into city (name, countrycode, district, population) values ('Benville', 'USA', 'Nebraska', 1)`);

	results = await connection.promise().query('SELECT count(*) FROM city');
	console.log(results);
}

runQuery();