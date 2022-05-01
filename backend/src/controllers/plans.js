const knex = require('../services/knex');

const getPlans = async (request, response) => {
	const completedPlans = [];

	const planosBD = await knex('plan as p')
		.innerJoin('plan_description as pd', 'p.id', 'pd.plan_id');

	console.log(planosCompletos)

	return response.status(400).json(planos);
}

module.exports = { getPlans };
