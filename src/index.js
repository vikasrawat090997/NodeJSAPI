//src/index.js
const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
let cors = require("cors");
app.use(cors());
const PORT = 3006;
/**
 * Express middleware.
 */
// parses incoming requests with JSON payloads
app.use(express.json());
// parses incoming requests with urlencoded payloads
// extended: true - parsing the URL-encoded data with the querystring library
app.use(express.urlencoded({ extended: true }));

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      version: "3.0.0",
      title: "Student",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3006/"],
    },
  }),
  // apis: ["index.js", "./routes/*.js"],
  apis: [`${__dirname}/routes/*.js`],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/rest-api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

/**
 * Routes.
 */

const studentRouter = require("./routes/student");
app.use("/student", studentRouter);
// Add this after the middleware part

function onStart() {
  console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;
