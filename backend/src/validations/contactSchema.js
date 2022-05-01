const yup = require('yup');

const saveContactMessageSchema = yup.object().shape({
	phone: yup
		.string()
		.strict()
		.max(15)
		.required(),

	email: yup
		.string()
		.strict()
		.email()
		.max(255)
		.required(),

	subject: yup
		.string()
		.strict()
		.max(255)
		.required(),

	message: yup
		.string()
		.strict()
		.max(2550)
		.required(),
});

module.exports = { saveContactMessageSchema };
