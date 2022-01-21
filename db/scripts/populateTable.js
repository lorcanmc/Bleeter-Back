import query from "../index.js";

async function populateTweetsTable() {
  const res = await query(
    `INSERT INTO tweets (text, timestamp) VALUES ($1, $2) RETURNING *;`,
    ["hello", "1000"]
  );
  console.log(res);
}

populateTweetsTable();
