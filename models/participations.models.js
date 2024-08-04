module.exports = (sequelize, DataTypes) => {

    const Participations = sequelize.define('Participations', {
        idParticipation: {
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
        tableName: 'participations'
    });

    return Participations;

}