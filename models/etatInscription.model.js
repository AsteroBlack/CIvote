module.exports = (sequelize, DataTypes) => {
    const EtatInscription = sequelize.define('EtatInscription', {
        idEtat: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        libelEtat: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        tableName: 'etat_inscriptions'
      });
      return EtatInscription
}



