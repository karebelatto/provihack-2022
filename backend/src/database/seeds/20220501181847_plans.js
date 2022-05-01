const { insertInfo } = require('../../helpers/handleKnex');

exports.seed = async function (knex) {
	const plans = [{
		id: '9b4e0195-d65b-4f0a-a260-7671eff196a0',
		name: 'Diario',
		price: 500
	}, {
		id: 'fda5cca5-10fc-4256-9c9d-fbcbe3f5e373',
		name: 'Mensal',
		price: 2500
	}, {
		id: 'c93cb069-6e94-4558-a581-efa945630712',
		name: 'Trimestral',
		price: 5000
	}]
	try {
		await insertInfo('plan', plans)
	}
	catch (error) {

	}
};  