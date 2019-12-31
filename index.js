const fs = require('fs-extra');

module.exports = function(plop) {
  function appendJSON(fileData, name, version) {
    fileData.dependencies[name] = version;
    return fileData;
  }

  function addToPkgJSON(answers, config, plop) {
    fs.readJSON(config.JSONFile, {}, (err, fileData) => {
      const json = appendJSON(fileData, config.newPackageName, config.newPackageVersion);

      fs.writeJSON(config.JSONFile, json, { spaces: 2 }, err => {
        console.error(err);
      });
    });
  }

  plop.setActionType('addToPkgJSON', addToPkgJSON);
  plop.setDefaultInclude({ actionTypes: true });
};