'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectsCategories = sequelize.define('projectsCategories', {
    categoryId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  projectsCategories.associate = function(models) {
    // associations can be defined here
  };
  return projectsCategories;
};