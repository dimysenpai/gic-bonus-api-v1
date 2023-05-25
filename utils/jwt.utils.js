// Imports
const jwt = require("jsonwebtoken");

const JWT_SIGN = "eyJzdWIiOiIxMjM0NTY3OdimySenpai24iLCJpYXQiOjE1MTYyMzkwMjJ9";

// Exports functions
module.exports = {
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
      },
      JWT_SIGN,
      {
        expiresIn: "24h",
      }
    );
  },
};
