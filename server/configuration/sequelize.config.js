const Sequelize = require('sequelize');
const Cart = require('../models/Cart.js');
const Item = require('../models/Item.js');

module.exports = (config) => {
    const sequelize = new Sequelize(config.database.connection);

    let models = {};

    const cart = Cart(sequelize, Sequelize);
    const item = Item(sequelize, Sequelize);

    models.cart = cart;
    models.item = item;

    cart.hasMany(item, { onDelete: 'cascade' });
    item.belongsTo(cart, { onDelete: 'cascade' });

    if(config.database.sync) {
        sequelize.query('SET FOREIGN_KEY_CHECKS=0', { raw: true })
            .then(() => {
                sequelize.sync({
                    force: config.database.forceSync
                }).then(() => {
                    console.log("Database synhronized");
                })
            });
    }

    return models;
}