const repository = require('../repositories/cityRepository');

function getCities() {
  return repository.findAll();
}

function getCityById(id) {
  return repository.findById(id);
}

module.exports = { getCities, getCityById };
