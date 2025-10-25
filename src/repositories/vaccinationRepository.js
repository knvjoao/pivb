const points = require('../data/vaccinationPoints');

function findByCityId(cityId) {
  return points.filter(p => p.cityId === cityId);
}

module.exports = { findByCityId };