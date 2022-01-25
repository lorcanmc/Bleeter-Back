import query from "../index.js";

const sqlString = `UPDATE tweets SET likes=0`;

async function addColumnTweetsTable() {
  const res = await query(sqlString);
  console.log("tweets table altered:", res);
}

addColumnTweetsTable();
