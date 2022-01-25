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
        `INSERT INTO tweets(text, timestamp, author, likes) VALUES ($1, $2, $3, 0) RETURNING text, timestamp, author`,
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

export async function updateTweets(liked, id) {
   let payload = [];
   let message = `Updated tweets with id ${id} successfully.`;
   let statusCode = 200;
   let success = true;
   const likeValue = liked ? 1 : -1;

   try {
      const dataRes = await query(
         `UPDATE tweets SET likes=likes+$1 WHERE id=$2 RETURNING likes`,
         [likeValue, id]
      );
      payload = dataRes.rows;
   } catch (e) {
      statusCode = 400;
      message = `There was an error with you request. The initial Error was: ${e}`;
      success = false;
   }

   return { payload, statusCode, success, message };
}