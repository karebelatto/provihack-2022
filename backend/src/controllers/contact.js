const { insertInfo } = require('../helpers/handleKnex');
const { generateUuid } = require('../helpers/handleUuid');

const saveContactMessage = async (request, response) => {
	const { email, subject, message } = request.body;

	insertInfo('contact_information', {
		id: generateUuid(),
		email,
		subject,
		message,
	}).then(() => {
		return response.status(200).json('Mensagem enviada com sucesso!')
	}).catch((err) => {
		return response.status(400).json('Falha ao enviar a mensagem...')
	});
}

module.exports = { saveContactMessage };
