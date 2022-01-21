import query from '../index.js'

const sqlString = `DROP TABLE tweets;`

async function deleteTweets() {
    const res = await query(sqlString)
    console.log('tweets table emptied:', res)
}

deleteTweets()