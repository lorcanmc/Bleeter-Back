import query from "../db/index.js";

export async function getAllTweets() {
    const data = await query(`SELECT * FROM tweets ORDER BY timestamp DESC LIMIT 10;`);
    return data.rows;
}

export async function createTweet(text, timestamp) {
  let payload = [];
  let message = `Created tweet successfully.`;
  let statusCode = 200;
  let success = true;

  try {
     const dataRes = await query(
        `INSERT INTO tweets(text, timestamp) VALUES ($1, $2) RETURNING text, timestamp`,
        [text, timestamp]
     );
     payload = dataRes.rows;
  } catch (e) {
     statusCode = 400;
     message = `There was an error with you request. The initial Error was: ${e}`;
     success = false;
  }
  return { payload, statusCode, success, message };
}