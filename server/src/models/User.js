module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        email: {
            unique: true,
            type: DataTypes.STRING,
            allowNull : false
        },
        password: {
            type: DataTypes.STRING,
            allowNull : false
        }
    });
}