module.exports = (sequelize, Sequelize) => {
    return sequelize.define('cart', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        completed: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
}