import pg from "pg";
// import  { connectionString } from "../config.js";

const pool = new pg.Pool({
  //Heroku credentials are now environment variables
//   connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}