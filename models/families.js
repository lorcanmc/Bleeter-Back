import query from "../db/index.js";

export async function getAllFamilies() {
    const data = await query(`SELECT * FROM families;`);
    return data.rows;
}

export async function getFamilyById(requestId) {
    console.log(requestId)
    const data = await query(`SELECT * FROM families WHERE id=$1`, [requestId]);
    return {
        statusCode: 200,
        success: true,
        message: "here is the family",
        payload: data.rows,
      };
}
