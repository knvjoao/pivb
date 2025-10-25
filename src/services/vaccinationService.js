const repository = require('../repositories/vaccinationRepository');

function getPointsByCity(cityId) {
  return repository.findByCityId(cityId);
}

module.exports = { getPointsByCity };