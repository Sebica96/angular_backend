module.exports = (models) => {
    const Item = models.item;
    
    const get = (id) => {
        return new Promise((resolve, reject) => {
            Item.findOne({
                where: {
                    id: id
                }
            }).then(item => {
                resolve(item);
            }).catch(err => {
                reject(err);
            });
        });
    };

    const create = (object) => {
        return new Promise((resolve, reject) => {
            Item.create({
                name: object.name,
                quantity: object.quantity ? object.quantity : null,
                cartId: object.cartId
            }).then(item => {
                resolve(item);
            }).catch(err => {
                reject(err);
            });
        });
    };

    const createMany = (objects) => {
        return new Promise((resolve, reject) => {
            Item.bulkCreate(objects)
                .then(response => {
                    resolve(response);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    const update = (object) => {
        return new Promise((resolve, reject) => {
            Item.update({
                name: object.name,
                quantity: object.quantity ? object.quantity : null,
            }, {
                where: {
                    id: object.id
                }
            }).then(updated => {
                resolve(updated);
            }).catch(err => {
                reject(err);
            });
        });
    };

    const destroy = (id) => {
        return new Promise((resolve, reject) => {
            Item.destroy({
                where: {
                    id: id
                }
            }).then(destroyed => {
                resolve(destroyed);
            }).catch(err => {
                reject(err);
            });
        });
    };

    return {
        get,
        create,
        update,
        destroy,
        createMany
    };
}