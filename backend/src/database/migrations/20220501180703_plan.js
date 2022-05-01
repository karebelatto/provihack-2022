exports.up = async function (knex) {
	return knex.schema.createTable('plan', (table) => {
		table.uuid('id').unique().notNullable();
		table.string('name', 30).unique().notNullable();
		table.integer('price').notNullable();
		table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
		table.timestamp('updatedAt').nullable();
		table.timestamp('deletedAt').nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('plan');
};