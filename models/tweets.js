import query from "../db/index.js";

export async function getAllTweets() {
    const data = await query(`SELECT * FROM tweets ORDER BY id DESC LIMIT 10;`);
    return data.rows;
}

export async function createTweet(text, timestamp, author) {
  let payload = [];
  let message = `Created tweet successfully.`;
  let statusCode = 200;
  let success = true;

  try {
     const dataRes = await query(
        `INSERT INTO tweets(text, timestamp, author) VALUES ($1, $2, $3) RETURNING text, timestamp, author`,
        [text, timestamp, author]
     );
     payload = dataRes.rows;
  } catch (e) {
     statusCode = 400;
     message = `There was an error with you request. The initial Error was: ${e}`;
     success = false;
  }
  return { payload, statusCode, success, message };
}