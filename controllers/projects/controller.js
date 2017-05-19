const projectsService = require('../../services/projects');

function get(req, res) {
  const projects = projectsService.findAll();
  return res.json(projects);
}

function post(req, res) {
  projectsService.create(req.body);
  return res.status(201).json({ message: 'Project Created' });
}

function getByRisk(req, res) {
  const projects = projectsService.findByRisk();
  return res.json(projects);
}

module.exports = { get, post, getByRisk };
