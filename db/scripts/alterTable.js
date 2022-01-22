import query from "../index.js";

const sqlString = `ALTER TABLE tweets ADD author TEXT`;

async function addColumnTweetsTable() {
  const res = await query(sqlString);
  console.log("tweets table altered:", res);
}

addColumnTweetsTable();
