// Imports
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");
const models = require("../models");

// Routes
module.exports = {
  login: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email == null || password == null) {
      return res.status(400).json({ error: "parametre manquant" });
    }

    // Vérifier les variable

    // Vérifier si l'email existe déjà

    models.User.findOne({
      where: { email: email },
    })
      .then((userFound) => {
        if (userFound) {
          bcrypt.compare(
            password,
            userFound.password,
            (errBycrypt, resBycrypt) => {
              if (resBycrypt) {
                return res.status(200).json({
                  userId: userFound.id,
                  token: jwtUtils.generateTokenForUser(userFound),
                });
              } else {
                return res.status(403).json({ error: "Mot de passe invalide" });
              }
            }
          );
        } else {
          return res.status(404).json({
            error: "l'utilisateur n'existe pas dans la base de donnée",
          });
        }
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ error: "imposible de vérifier si l'utilisateur exist" });
      });
  },
  register: (req, res) => {
    // Params
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    if (
      firstname == null ||
      lastname == null ||
      phone == null ||
      email == null ||
      username == null ||
      password == null
    ) {
      return res.status(400).json({ error: "parametre manquant" });
    }

    // Vérifier les variable

    // Vérifier si l'email existe déjà

    models.User.findOne({
      attributes: ["email"],
      where: { email: email },
    })
      .then((userFound) => {
        if (!userFound) {
          bcrypt.hash(password, 5, (err, cryptedPassword) => {
            const newUser = models.User.create({
              firstname: firstname,
              lastname: lastname,
              phone: phone,
              email: email,
              username: username,
              password: cryptedPassword,
            })
              .then((newUser) => {
                return res.status(201).json({ userId: newUser.id });
              })
              .catch((err) => {
                return res.status(500).json({
                  error: "Imposible d'ajouter l'utilisateur",
                });
              });
          });
        } else {
          return res.status(409).json({ error: "l'utilisateur exist déjà" });
        }
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ error: "imposible de vérifier si l'utilisateur exist" });
      });
  },
};
