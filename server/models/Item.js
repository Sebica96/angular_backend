module.exports = (sequelize, Sequelize) => {
    return sequelize.define('item', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV1
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantity : {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });
}