module.exports = (models) => {
    const Item = models.item;
    const Cart = models.cart;

    const get = (id) => {
        return new Promise((resolve, reject) => {
            Cart.findOne({
                where: {
                    id: id
                },
                include: [
                    {
                        model: Item
                    }
                ]
            }).then(response => {
                console.log('here')
                resolve(response);
            }).catch(err => {
                console.log('there')
                reject(err);
            });
        });
    };

    const getAll = () => {
        return new Promise((resolve, reject) => {
            Cart.findAll({
                include: [
                    {
                        model: Item
                    }
                ]
            }).then(carts => {
                resolve(carts);
            }).catch(err => {
                reject(err);
            });
        }); 
    };

    const create = (object) => {
        return new Promise((resolve, reject) => {
            Cart.create({
                name: object.name,
                completed: false
            }).then(cart => {
                resolve(cart);
            }).catch(err => {
                reject(err);
            });
        });
    };

    const update = (object) => {
        return new Promise((resolve, reject) => {
            Cart.update({
                name: object.name,
                completed: object.completed
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
            Cart.destroy({
                where: {
                    id: id
                }
            }).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err);
            });
        });
    };

    return {
        get,
        getAll,
        create,
        update,
        destroy
    };
}