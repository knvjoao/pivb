const service = require('../services/cityService');

function list(req, res) {
  const cities = service.getCities();
  res.render('cities', { cities });
}

function details(req, res) {
  const id = parseInt(req.params.id);
  const city = service.getCityById(id);

  if (!city) {
    return res.status(404).send('Cidade não encontrada');
  }

  res.render('cityDetails', { city });
}

module.exports = { list, details };
