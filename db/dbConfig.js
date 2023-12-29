const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
	user: "evangdi-admin",
	database: "evangadi-db",
	host: "localhost",
	password: "987654321",
	connectionLimit: 10,
});
// dbconnection.execute("select 'test'", (err, result) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(result);
// 	}
// });

module.exports = dbconnection.promise()
