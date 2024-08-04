module.exports = (sequelize, DataTypes) => {

    const CodeElecteur = sequelize.define('CodeElecteur', {
        idCodeElecteur: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        code_electeur: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: {
                args: true,
                msg: "This code is already used"
            },
        }
    }, {
        tableName: 'codeElecteur'
    });

    return CodeElecteur

}