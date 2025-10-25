const cities = require('../data/cities');

function findAll() {
  return cities;
}

function findById(id) {
  return cities.find(c => c.id === id);
}

module.exports = { findAll, findById };