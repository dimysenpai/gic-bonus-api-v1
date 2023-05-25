// Imports
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./apiRouter").router;

// Instance du serveur
let server = express();

// Configuration de Body Parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configuration des routes
server.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("Serveur demarer sur le port 8080");
});

server.use("/api/", apiRouter);

// Démarrer le serveur
server.listen(8080, () => {
  console.log("Serveur demarer sur le port 8080");
});
