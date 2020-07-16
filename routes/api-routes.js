// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.json(path.join(__dirname, "index.html"));
  });
  app.get("/api/planet/:id", (req, res) => {
    console.log();
    db.Planet.findAll({
      where: {
        id: req.params.id
      }
    }).then(dbPlanet => {
      res.json(dbPlanet);
    });
  });
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
