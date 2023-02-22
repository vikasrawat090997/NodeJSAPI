var Db = require("../repository/student.repository");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;
const logger = createLogger({
  format: combine(label({ label: "API" }), timestamp(), prettyPrint()),
  transports: [
    //new transports.Console(),
    new transports.File({ filename: "combined.log" }),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
});
async function getRecords(req, res) {
  try {
    logger.log({
      level: "info",
      message: "API is hitting properly",
    });
    Db.getRecords().then((data) => {
      // Respond with some data and return status OK
      return res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
  }
}

async function getRecordByID(req, res) {
  try {
    Db.getRecordByID(req.params.id).then((data) => {
      if (data.length > 0) {
        const result = {
          message: "Get Successfully",
          data: data,
        };
        return res.status(200).json(result);
      } else {
        const result = {
          message: "No Data Found",
          //data: data,
        };
        return res.status(400).json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function addRecord(req, res) {
  try {
    Db.addRecord(req.body).then((data) => {
      const result = {
        message: "CreatedSuccesfuly",
      };
      return res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  getRecords: getRecords,
  getRecordByID: getRecordByID,
  addRecord: addRecord,
};
