var express = require('express'),
    router = express.Router(),
    constant = require('../constant');

const Items = require('../models/Items');

//Create Items
router.post('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    let { itemCode, itemName, itemGroup, uom, itemCategory } = req.body;
    let start = 1000;
    let res1 = await Items.find().sort({ '_id': -1 }).limit(1);
    if (res1.length == 0) {
        itemCode = start;
    }
    else {
        let lastItemCode = parseInt(res1[0]?.itemCode) + 1;
        itemCode = lastItemCode;
    }

    const items = new Items({
        itemCode, itemName, itemGroup, uom, itemCategory
    });

    items.save()
        .then(result => {
            return res.json({
                status: 201,
                message: 'New Item is created!',
                data: result
            });
        })
        .catch(err => {
            return res.json(constant.somethingWrong);
        });

});

/**
 * @swagger
 * /api/items:
 *   get:
 *     tags:
 *       - Items
 *     description: Returns all items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of items
 */
router.get('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    Items.find().select("-creation_date").sort({ 'itemGroup': 1 }).lean()
        .then(result => {
            return res.json({
                status: 200,
                message: 'List of items',
                data: result
            });
        })
        .catch(err => {
            return res.json(constant.somethingWrong);
        });

});


//update city
router.put('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    Items.findByIdAndUpdate(req.body.id, {
        itemName: req.body.itemName,
        itemGroup: req.body.itemGroup,
        uom: req.body.uom,
        itemCategory: req.body.itemCategory
    })
        .then(result => {
            return res.json({
                status: 201,
                message: 'Items is Updated!',
                data: result
            });
        })
        .catch(err => {
            return res.json({
                status: 201,
                message: 'city is Updated!',
            });
        });

});


/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     tags:
 *       - Items
 *     description: Deletes a single items
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: items's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }
    Items.findOneAndDelete({ _id: req.query.id })
        .then(result => {
            return res.json({
                status: 200,
                message: 'item is Deleted!',
            });
        })
        .catch(err => {
            return res.json(constant.somethingWrong);
        });
});

router.post('/upload', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    const data = req.body;
    City.insertMany(data)
        .then(result => {
            return res.json({
                status: 201,
                message: 'Bulk Location is added',
                data: result
            });
        })
        .catch(err => {
            return res.json({ ...constant.somethingWrong, error: err });
        });
});


module.exports = router;