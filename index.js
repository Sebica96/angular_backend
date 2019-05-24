const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./server/configuration/sequelize.config');
const config = require('./server/config');
const CartServices = require('./server/services/cart-services');
const ItemServices = require('./server/services/item-services');

const router = require('./server/routes');

const models = sequelize(config);

const services = {}

services.cart = CartServices(models);
services.item = ItemServices(models);

config.services = services;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router(config));

app.listen(process.env.PORT || 3000, (err) => {
    if(err) {
        console.log('Error');
    }
    console.log(`Listening on port ${process.env.PORT || 3000}`);
});