const express = require('express');

const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents/new", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;