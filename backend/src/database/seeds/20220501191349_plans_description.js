const { generateUuid } = require('../../helpers/handleUuid');
const { insertInfo } = require('../../helpers/handleKnex');

exports.seed = async function (knex) {
	const description_plans_diario = [{
		id: generateUuid(),
		plan_id: '9b4e0195-d65b-4f0a-a260-7671eff196a0',
		description: '01 Viagem de 80 minutos'
	}, {
		id: generateUuid(),
		plan_id: '9b4e0195-d65b-4f0a-a260-7671eff196a0',
		description: 'Acesso a plataforma ECile'
	}, {
		id: generateUuid(),
		plan_id: '9b4e0195-d65b-4f0a-a260-7671eff196a0',
		description: 'Acesso a plataforma de premiação'
	}];

	const description_plans_mensal = [{
		id: generateUuid(),
		plan_id: 'fda5cca5-10fc-4256-9c9d-fbcbe3f5e373',
		description: 'Viagens ilimitadas de 60 minutos'
	}, {
		id: generateUuid(),
		plan_id: 'fda5cca5-10fc-4256-9c9d-fbcbe3f5e373',
		description: 'Acesso a plataforma ECile'
	}, {
		id: generateUuid(),
		plan_id: 'fda5cca5-10fc-4256-9c9d-fbcbe3f5e373',
		description: 'Acesso a plataforma de premiação'
	}];

	const description_plans_trimestral = [{
		id: generateUuid(),
		plan_id: 'c93cb069-6e94-4558-a581-efa945630712',
		description: 'Viagens ilimitadas de 60 minutos'
	}, {
		id: generateUuid(),
		plan_id: 'c93cb069-6e94-4558-a581-efa945630712',
		description: 'Acesso a plataforma ECile'
	}, {
		id: generateUuid(),
		plan_id: 'c93cb069-6e94-4558-a581-efa945630712',
		description: 'Acesso a plataforma de premiação'
	}];

	try {
		await insertInfo('plan_description', description_plans_diario);
		await insertInfo('plan_description', description_plans_mensal);
		await insertInfo('plan_description', description_plans_trimestral);
	} catch (error) {

	}
};