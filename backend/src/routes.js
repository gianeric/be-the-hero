const express            = require('express'); //constante express recebe todos os dados de do framework express
const OngController      = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfilerController = require('./controllers/ProfilerController');
const SessionController  = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfilerController.index);

module.exports = routes;