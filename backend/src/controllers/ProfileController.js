const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ond_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ond_id)
            .select('*');

        return res.json(incidents);
    }
}