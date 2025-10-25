const service = require('../services/vaccinationService');

function points(req, res) {
  const cityId = parseInt(req.params.cityId);
  const result = service.getPointsByCity(cityId);
  res.render('vaccinationPoints', { points: result });
}

module.exports = { points };
