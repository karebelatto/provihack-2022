const { Router } = require('express');

const { saveContactMessage } = require('./controllers/contact');

const { validateBody } = require('./middlewares/validateRequest');

const { saveContactMessageSchema } = require('./validations/contactSchema');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/contact', validateBody(saveContactMessageSchema), saveContactMessage);

module.exports = routes;
