const validateBody = (schema) => async (request, response, next) => {
	try {
		await schema.validate(request.body);
		next();
	} catch (error) {
		return response.status(500).json(error.message);
	}
};

module.exports = { validateBody };
