const { Sequelize, DataTypes } = require('sequelize')
const useBcrypt = require('sequelize-bcrypt')

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
    }

)

try {
    sequelize.authenticate()
    console.log('connexion has been established successfully !!')
} catch (err) {
    console.error("unable to connect to DB", err)
}

const DB = {}
DB.sequelize = sequelize,
    DB.Sequelize = Sequelize

// ================================ADD MODELS=================================

DB.User = require('../models/users.models')(DataTypes, sequelize, useBcrypt)
DB.Role = require('../models/roles.model')(DataTypes, sequelize)
DB.PostCandidats = require('../models/postCandidats.model')(DataTypes, sequelize)
DB.Participations = require('../models/participations.models')(DataTypes, sequelize)
DB.Inscription = require('../models/inscription.model')(DataTypes, sequelize)
DB.EtatInscription = require('../models/etatInscription.model')(DataTypes, sequelize)
DB.Election = require('../models/election.model')(DataTypes, sequelize)
DB.CodeElecteur = require('../models/codeElecteur.model')(DataTypes, sequelize)
DB.Candidats = require('../models/candidat.model')(DataTypes, sequelize)

// ================================END MODELS=================================

// ================================ Relations ================================

EtatInscription.hasMany(Inscription, { foreignKey: 'idEtat' });
Inscription.belongsTo(EtatInscription, { foreignKey: 'idEtat' });

Role.hasMany(User, { foreignKey: 'idRole' });
User.belongsTo(Role, { foreignKey: 'idRole' });

Inscription.hasMany(User, { foreignKey: 'idInscription' });
User.belongsTo(Inscription, { foreignKey: 'idInscription' });

User.hasOne(CodeElecteur, { foreignKey: 'idUser' });
CodeElecteur.belongsTo(User, { foreignKey: 'idUser' });

Election.hasMany(Candidats, { foreignKey: 'idElection' });
Candidats.belongsTo(Election, { foreignKey: 'idElection' });

User.hasMany(Candidats, { foreignKey: 'idUser' });
Candidats.belongsTo(User, { foreignKey: 'idUser' });

Candidats.hasMany(PostCandidats, { foreignKey: 'idCandidat' });
PostCandidats.belongsTo(Candidats, { foreignKey: 'idCandidat' });

User.hasMany(Participations, { foreignKey: 'idUser' });
Participations.belongsTo(User, { foreignKey: 'idUser' });

Election.hasMany(Participations, { foreignKey: 'idElection' });
Participations.belongsTo(Election, { foreignKey: 'idElection' });

// ================================ END Relations ================================

DB.sequelize.sync({ force: false }).then(() => {
    console.log('==========>All models are ready<=============');
})

module.exports = { DB, sequelize }