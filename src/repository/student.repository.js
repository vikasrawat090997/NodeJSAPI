var config = require("../config/dbconfig");
const sql = require("mssql");
const StudentModel = require("../model/student.model");

async function getRecords(req, res) {
  try {
    console.log(StudentModel);

    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * from Student");
    return result.recordset;
  } catch (error) {
    console.log(error);
  }
}

async function getRecordByID(id) {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .query(`SELECT * from Student where id = ${id}`);
    return result.recordsets[0];
  } catch (error) {
    console.log(error);
  }
}

async function addRecord(data) {
  try {
    console.log(data);
    let sqlQuery = `INSERT INTO Student (Name, Mobile)
                    VALUES ('${data.name}','${data.mobile}')`;
    console.log(sqlQuery);

    let pool = await (await sql.connect(config)).request().query(sqlQuery);
    return pool.rowsAffected;
  } catch (err) {
    console.log(err);
  }
}
async function deleteRecord(data) {
  try {
    let sqlQuery = `delete from Student where id= '${data.id}'`;
    console.log(sqlQuery);
    let pool = await (await sql.connect(config)).request().query(sqlQuery);
    return pool.rowsAffected;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getRecords: getRecords,
  getRecordByID: getRecordByID,
  addRecord: addRecord,
  deleteRecord: deleteRecord,
};
