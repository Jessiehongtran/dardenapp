require('dotenv').config();
const server = require('./API/server');

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * FROM database_file.db3;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const PORT = process.env.PORT ;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})