
module.exports = (sequelize, DataTypes) => {

    const Candidats = sequelize.define('Candidats', {
        idCandidat: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idElection: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'candidats'
    });

    return Candidats

}