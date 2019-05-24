# Angular project backend API server

# Routing

# URL

[Click here](https://glacial-retreat-61322.herokuapp.com/cart/all) to access the webpage.

https://glacial-retreat-61322.herokuapp.com/

## Cart routing

Base route ```/cart```

#### /all
```
Methods: all
Returns: Cart with Item array
Example:
[
    {
        "id": "7d6e5780-7e69-11e9-8c14-9b64f487b2a4",
        "name": "Cart Name",
        "completed": true/false,
        "updatedAt": "2019-05-24T21:18:48.642Z",
        "createdAt": "2019-05-24T21:18:48.642Z",
        "items": [
            {
                "id": "8568bb10-7e69-11e9-8c14-9b64f487b2a4",
                "name": "Mineral water",
                "quantity": 25,
                "cartId": "7d6e5780-7e69-11e9-8c14-9b64f487b2a4",
                "updatedAt": "2019-05-24T21:18:48.642Z",
                "createdAt": "2019-05-24T21:18:48.642Z"
            }
        ]
    }
]
```

#### /get/:id
```
Methods: all
Returns: Item
Example:
{
    "id": "8568bb10-7e69-11e9-8c14-9b64f487b2a4",
    "name": "Mineral water",
    "quantity": 25,
    "cartId": "7d6e5780-7e69-11e9-8c14-9b64f487b2a4",
    "updatedAt": "2019-05-24T21:18:48.642Z",
    "createdAt": "2019-05-24T21:18:48.642Z"
}
```

#### /create
```
Methods: post
Returns: Cart (if status === 200) without Item array
Required fields: name
```

#### /update
```
Methods: post
Returns: null
Required fields: name, id, completed
```

#### /delete
```
Methods: post
Returns: null
Required fields: id
```

## Item routing

Base route ```/item```

#### /:id

```
Methods: all
Returns: Item
Example:
{
    "id": "8568bb10-7e69-11e9-8c14-9b64f487b2a4",
    "name": "Test",
    "quantity": "10",
    "cartId": "7d6e5780-7e69-11e9-8c14-9b64f487b2a4",
    "updatedAt": "2019-05-24T21:18:48.642Z",
    "createdAt": "2019-05-24T21:18:48.642Z"
}
```

#### /create

```
Methods: post
Returns: Item
Required fields: name, cartId
```

#### /delete

```
Methods: post
Returns: null
Required fields: id
```

#### update

```
Methods: post
Returns: null
Required fields: id, name
```