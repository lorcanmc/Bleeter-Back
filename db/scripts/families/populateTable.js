import query from "../../index.js";

const families = ["Johnson", "Green", "Periera",]

async function populateFamiliesTable() {

  
     const res = await query(
    `INSERT INTO families (familyName) VALUES ($1) RETURNING *;`,
      ["Periera"]
    );
  
 

}

populateFamiliesTable();
