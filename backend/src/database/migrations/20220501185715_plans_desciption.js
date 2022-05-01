exports.up = function (knex) {
	return knex.schema.createTable('plan_description', (table) => {
		table.uuid('id').unique().notNullable();
		table.uuid('plan_id').notNullable();
		table.text('description').notNullable();
		table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
		table.timestamp('updatedAt').nullable();
		table.timestamp('deletedAt').nullable();
		table.foreign('plan_id').references('id').inTable('plan');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('plan_description');
};
