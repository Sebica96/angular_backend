const Router = require('express');
const CartRouting = require('./cart');
const ItemRouting = require('./item');

module.exports = (config) => {
    const router = Router.Router();
    
    router.use('/cart', CartRouting(config));
    router.use('/item', ItemRouting(config));

    return router;
};