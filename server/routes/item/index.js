const Router = require('express');

module.exports = (config) => {
    const router = Router.Router();

    router.get('/:id', (req, res) => {
        if(req.body.id !== undefined){
            config.services.item.get(req.body.id)
                .then(item => {
                    if(item)
                        return res.status(200).send(item);
                    return res.sendStatus(404);
                }).catch(err => {
                    res.sendStatus(500);
                });
        } else {
            return res.sendStatus(400);
        }
    });

    router.post('/create', (req, res) => {
        if(req.body.name !== undefined && req.body.cartId !== undefined) {
            config.services.item.create(req.body)
                .then(item => {
                    if(item)
                        return res.status(200).send(item);
                    return res.sendStatus(500);
                }).catch(err => {
                    console.log(err);
                    return res.sendStatus(500);                    
                })
        } else {
            return res.sendStatus(400);
        }
    });

    router.post('/delete', (req, res) => {
        if(req.body.id !== undefined) {
            config.services.item.destroy(req.body.id)
                .then(destroyed => {
                    if(destroyed === 1)
                        return res.sendStatus(200);
                    return res.sendStatus(404);
                }).catch(err => {
                    return res.sendStatus(500);
                });
        } else {
            return res.sendStatus(400);
        }
    });

    router.post('/update', (req, res) => {
        if(req.body.name !== undefined && req.body.id !== undefined){
            config.services.item.update(req.body)
            .then(response => {
                if(response[0] !== 0) {
                    return res.sendStatus(200);
                }
                return res.sendStatus(404);
            }).catch(err => {
                return res.sendStatus(500);
            });
        } else {
            return res.sendStatus(404);
        }
    });

    return router;
};