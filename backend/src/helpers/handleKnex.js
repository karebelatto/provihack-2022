const knex = require('../services/knex');

const getInfo = async (table) => await knex(table);
const getInfoWithConditions = async (table, conditons) => await knex(table).where(conditons);

const insertInfo = async (table, values) => await knex(table).insert(values);

module.exports = { insertInfo, getInfo, getInfoWithConditions }
