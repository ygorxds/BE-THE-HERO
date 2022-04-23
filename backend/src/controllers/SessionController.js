const { response } = require('express');
const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: 'NO ONG FOUND WITH THIS ID' });
    }

    return res.json(ong);
  }
}