module.exports = (sequelize, DataTypes, useBcrypt) => {

    const User = sequelize.define('User', {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "This login is already used"
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "passwort field must not be empty"
                },
                len: {
                    args: [8, Infinity],
                    msg: "the password must be at least 8 characters long"
                }
            }
        },
        idRole: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idInscription: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'users'
    });
    useBcrypt(userModel, {
        field: 'password', // secret field to hash, default: 'password'
        rounds: 12, // used to generate bcrypt salt, default: 12
        compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
    })
    return User

}