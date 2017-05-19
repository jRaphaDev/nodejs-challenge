const Projects = require('../../repository/projects');

function create(project) {
  return Projects.create(project);
}

function findAll() {
  return Projects.findAll();
}

function findByRisk() {
  return Projects.findByRisk();
}

module.exports = { create, findAll, findByRisk };
