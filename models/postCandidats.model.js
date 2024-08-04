module.exports = (sequelize, DataTypes) => {

    const PostCandidats = sequelize.define('PostCandidats', {
        idPost: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idCandidat: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        partie_politique: {
            type: DataTypes.STRING,
            allowNull: true
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true
        },
        social_media: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        }
    }, {
        tableName: 'postCandidats'
    });

    return PostCandidats;

}