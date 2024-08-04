module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        idRole: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelRole: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Role'
    });

    return Role

}