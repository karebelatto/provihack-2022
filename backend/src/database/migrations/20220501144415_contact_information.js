exports.up = async function (knex) {
	return knex.schema.createTable('contact_information', (table) => {
		table.uuid('id').unique().notNullable();
		table.string('phone', 15).notNullable();
		table.string('email', 255).notNullable();
		table.string('subject', 255).notNullable();
		table.string('message', 2550).notNullable();
		table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
		table.timestamp('updatedAt').nullable();
		table.timestamp('deletedAt').nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
