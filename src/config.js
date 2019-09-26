const path = require("path");

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development"
};
// you may want to  change NODE_ENV to production later
// const SERVER_PORT = 8000;
// const SERVER_CONFIGS = {
//     PRODUCTION: process.env.NODE_ENV === "production",
//     PORT: process.env.PORT || SERVER_PORT
// };
