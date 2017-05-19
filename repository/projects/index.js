const projects = require('./data').projects;

function create(project) {
  return projects.push(project);
}

function findAll() {
  return projects;
}

function findByRisk() {
  const projectRisk = projects.filter(
    (o) => {
      if (o.reports.indexOf('Red') >= 0) {
        return o;
      }
      if (o.reports.filter(a => a === 'Yellow').length > 1) {
        return o;
      }
    }
  );
  return projectRisk;
}


module.exports = { create, findAll, findByRisk };
