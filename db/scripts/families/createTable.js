import query from "../../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS families 
(id SERIAL PRIMARY KEY,
familyName TEXT
);`;

async function createFamiliesTable() {
  const res = await query(sqlString);
  console.log("families table created:", res);
}

createFamiliesTable();
