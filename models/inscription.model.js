module.exports = (sequelize, DataTypes) => {
    const Inscription = sequelize.define('Inscription', {

        idInscription: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_naissance: {
            type: DataTypes.DATE,
            allowNull: false
        },
        lieu_naissance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: true
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nationalPic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isNumeric: {
                    args: true,
                    msg: 'number must be numeric value'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: {
                args: true,
                msg: "This email is already used"
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: "Input is not email"
                }

            },
            idEtat: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    }, {
        tableName: 'inscriptions'
    });
    return Inscription
}

