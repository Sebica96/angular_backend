const Router = require('express');

module.exports = (config) => {
    const router = Router.Router();

    router.all('/all', (req, res) => {
        config.services.cart.getAll()
            .then(carts => {
                return res.status(200).send(carts);
            }).catch(err => {
                return res.sendStatus(500);
            });
    });

    router.all('/get/:id', (req, res) => {
        config.services.cart.get(req.params.id)
            .then(cart => {
                if(cart) {
                    return res.status(200).send(cart);
                }
                return res.sendStatus(404);
            }).catch(err => {
                return res.sendStatus(500);
            });
    });

    router.post('/create', (req, res) => {
        if(req.body.name !== undefined && req.body.name !== null) {
            config.services.cart.create(req.body)
                .then(cart => {
                    return res.status(201).send(cart);
                }).catch(err => {
                    return res.sendStatus(500);
                })
        } else {
            return res.sendStatus(400);
        }
    });

    router.post('/update', (req, res) => {
        if(req.body.name !== undefined && req.body.name !== null && req.body.id !== undefined && req.body.id !== null && req.body.completed !== undefined && req.body.completed !== null) {
            config.services.cart.update(req.body)
                .then(response => {
                    if(response[0] === 1)
                        return res.sendStatus(200);
                    return res.sendStatus(404);
                }).catch(err => {
                    return res.sendStatus(500);
                })
        } else {
            return res.sendStatus(400);
        }
    });

    router.post('/delete', (req, res) => {
        if(req.body.id !== undefined && req.body.id !== null) {
            config.services.cart.destroy(req.body.id)
                .then(response => {
                    if(response === 1)
                        return res.sendStatus(200);
                    return res.sendStatus(404);
                }).catch(err => {
                    return res.sendStatus(500);
                });
        } else {
            return res.sendStatus(400);
        }
    });

    return router;
};