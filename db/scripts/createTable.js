import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS tweets 
(id SERIAL PRIMARY KEY,
text TEXT,
timestamp TEXT
);`;

async function createTweetsTable() {
  const res = await query(sqlString);
  console.log("tweets table created:", res);
}

createTweetsTable();
