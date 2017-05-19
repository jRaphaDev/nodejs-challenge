const projects = require('./data').projects;

function create(project) {
  return projects.push(project);
}

function findAll() {
  return projects;
}

function findByRisk() {
  const projectRisk = projects.filter(
    (project) => {
      if (project.reports.indexOf('Red') >= 0) {
        return project;
      }
      if (project.reports.filter(report => report === 'Yellow').length > 1) {
        return project;
      }
    }
  );
  return projectRisk;
}

module.exports = { create, findAll, findByRisk };
