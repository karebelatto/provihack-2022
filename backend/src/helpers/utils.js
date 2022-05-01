const { getInfoWithConditions } = require('./handleKnex');

const returnCompletePlans = async (plans) => {
	const plansComplete = [];
	for (let plan in plans) {
		const itens = [];
		const descriptions = await getInfoWithConditions('plan_description', { plan_id: plan.id });

		descriptions.map(info => {
			itens.push(info.description);
		});

		plan.description = itens;
		plansComplete.push(plan);
	};

	console.log(plansComplete);
	return plansComplete;
}

module.exports = { returnCompletePlans };
