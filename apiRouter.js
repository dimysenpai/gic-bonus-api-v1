// Imports
const express = require("express");
const usersCtrl = require("./routes/usersCtrl");

// Router
exports.router = (() => {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route("/users/login/").post(usersCtrl.login);
  apiRouter.route("/users/register/").post(usersCtrl.register);

  return apiRouter;
})();
