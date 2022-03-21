// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const standardKeys = ({ allowNull: false, type: Sequelize.INTEGER });
//     const foreignKey = (field) => ({...standardKeys, field, references: { model: 'clubs', key: 'id' }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });

//     await queryInterface.createTable('matches', {
//       id: { ...standardKeys, primaryKey: true, autoIncrement: true },
//       homeTeam: foreignKey('home_team'),
//       homeTeamGoals: { ...standardKeys, field: 'home_team_goals' },
//       awayTeam: foreignKey('away_team'),
//       awayTeamGoals: { ...standardKeys, field: 'away_team_goals' },
//       inProgress: { ...standardKeys, field: 'in_progress' },
//     });

//   },

//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.dropTable('matchs');
//   }
// };

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matchs", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      home_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "clubs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "clubs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("matchs");
  },
};