module.exports = (sequelize, DataTypes) => {

    const Election = sequelize.define('Election', {
        idElection: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelElection: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_debut: {
            type: DataTypes.DATE,
            allowNull: false
        },
        date_fin: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'elections'
    });

    return Election

}