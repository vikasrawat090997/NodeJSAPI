const student = require("express").Router();
var studentController = require("../controller/student.controller");
// API ROUTES
student.get("/list", studentController.getRecords);
/**
 * @swagger
 * /student/list:
 *   get:
 *      description: Used to get all students data
 *      tags:
 *          - Get all students
 *      responses:
 *          '200':
 *              description: Resource Fetch successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

student.get("/:id", studentController.getRecordByID);
/**
 * @swagger
 * /student/{id}:
 *   get:
 *      description: Used to get individual students data
 *      tags:
 *          - Get students data by ID
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Student data
 *            schema:
 *              type: object
 *              required:
 *                - id
 *              properties:
 *                  id:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: 12
 *      responses:
 *          '200':
 *              description: Resource Fetch successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

student.post("/createRecord", studentController.addRecord);
/**
 * @swagger
 * /student/createRecord:
 *   post:
 *      description: Used to add student
 *      tags:
 *          - Add Student
 *      parameters:
 *          - in: body
 *            name: Add Student
 *            description: Student data
 *            schema:
 *              type: object
 *              required:
 *                 - Name
 *                 - Mobile
 *              properties:
 *                  Name:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Tina
 *                  Mobile:
 *                      type: integer
 *                      example: 1234567896
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
// student.route("/student/:id").get(function (req, res, next) {
//   Db.getRecord(req.params.id).then((data) => {
//     const result = {
//       message: "Get Successfully",
//       data: data,
//     };
//     return res.status(200).json(result);
//   });
// });

// student.route("/student/deleteRecord").post(function (req, res, next) {
//   Db.deleteRecord(req.body).then((data) => {
//     const result = {
//       message: "Deleted Succesfuly",
//     };
//     return res.status(200).json(result);
//   });
// });
module.exports = student;
