const config1 = {
  user: "vikas",
  password: "123",
  server: "DESKTOP-O1P1PVP",
  database: "Test",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};
const config = {
  user: "as",
  password: "123",
  database: "auroscholar_dev",
  //database: "AuroscholarDevpdbelopment",
  //server: "103.48.50.241",
  server: "216.48.184.29",
  port: 1232,
  pool: {
    max: 50,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: false,
    trustedConnection: true,
    enableArithAbort: true,
  },
};

// module.exports = config;
module.exports = {
  config1: config1,
  config: config,
};
