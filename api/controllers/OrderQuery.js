var express = require('express'),
    router = express.Router(),
    constant = require('../constant'),
    OrderQuery = require('../models/OrderQuery'),
    multer = require('multer'),
    fs = require('fs'),
    DIR = './upload_docs';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        if (file.mimetype === 'application/pdf') {
            filetype = 'pdf';
        }
        if (file.mimetype === 'application/vnd.ms-excel') {
            filetype = 'xls';
        }
        if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            filetype = 'xlsx';
        }

        cb(null, Date.now() + '.' + filetype);
    }
});
var upload = multer({
    storage: storage
});

//  Upload Image into a folder
router.post('/upload', upload.single('file'), function (req, res, next) {
    if (!req.file) {
        res.status(500);
        return next(err);
    }
    res.json({
        fileUrl: req.file.filename
    });
})

/**
 * @swagger
 * /api/order:
 *   post:
 *     tags:
 *       - Order
 *     description: Create Product Query
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: Product Query
 *           description: Product Query object
 *           in: body
 *           required: true
 *           schema:
 *              type: object
 *              properties:
 *                  name: {type: string}
 *                  userName: {type: string}
 *                  password: {type: string}
 *                  phone: {type: string}
 *                  role: {type: string}
 *                  isActive: {type: boolean}
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    const orderQuery = new OrderQuery({ ...req.body });
    orderQuery.save()
        .then(result => {
            return res.json({
                status: 201,
                message: 'user is created!',
                data: result,
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "Something went wrong",
                errorDetails: err,
            });
        });

});

/**
 * @swagger
 * /api/order:
 *   put:
 *     tags:
 *       - Order
 *     description: Update User
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: user
 *           description: User object
 *           in: body
 *           required: true
 *           schema:
 *              type: object
 *              properties:
 *                  name: {type: string}
 *                  phone: {type: string}
 *                  role: {type: string}
 *                  city: {type: string}
 *                  isActive: {type: boolean}
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    let { name, phone, role, password, isActive } = req.body;
    OrderQuery.findByIdAndUpdate(req.body.id, {
        name, isActive, phone, role, password
    })
        .then(result => {
            return res.json({
                status: 201,
                message: 'User is Updated!',
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "Something went wrong",
                error: err
            });
        });
});

/**
 * @swagger
 * /api/order/assignVendor:
 *   put:
 *     tags:
 *       - Order
 *     description: Update Order assignVendor
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: user
 *           description: Order object
 *           in: body
 *           required: true
 *           schema:
 *              type: object
 *              properties:
 *                  _id: {type: string}
 *                  assignVendor: {type: array}
 *                  status: {type: string}
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/assignVendor', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    let { _id, assignVendor, assignVendorOn, status } = req.body;
    OrderQuery.findByIdAndUpdate(_id, {
        assignVendor, assignVendorOn, status
    })
        .then(result => {
            return res.json({
                status: 201,
                message: 'Vendor is assigned!',
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "Something went wrong",
                error: err
            });
        });
});


/**
 * @swagger
 * /api/order/vendorQuotes:
 *   put:
 *     tags:
 *       - Order
 *     description: Update Order vendorQuotes
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: user
 *           description: Order object
 *           in: body
 *           required: true
 *           schema:
 *              type: object
 *              properties:
 *                  _id: {type: string}
 *                  vendorQuotes: {type: array}
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/vendorQuotes', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    let { _id, quotes, vendorId,status } = req.body;
    let order = await OrderQuery.findById(_id).select("vendorQuotes").sort({ _id: -1 }).lean();
    let previousQuotes;

    if (order["vendorQuotes"].length > 0) {
        previousQuotes = order["vendorQuotes"];
    }
    else {
        previousQuotes = [];
    }


    if (previousQuotes.length > 0) {
        let index = previousQuotes.findIndex(x => x.vendor == vendorId);
        if (index == -1) {
            previousQuotes.push({ ...quotes });
        }
        else {
            previousQuotes[index] = { ...quotes };
        }
    }
    else {
        previousQuotes.push({ ...quotes });
    }

    OrderQuery.findByIdAndUpdate(_id, {
        vendorQuotes: previousQuotes, status: status
    })
        .then(result => {
            return res.json({
                status: 201,
                message: 'Vendor is assigned!',
                result: result
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "Something went wrong",
                error: err
            });
        });
});



/**
 * @swagger
 * /api/order:
 *   get:
 *     tags:
 *       - Order
 *     description: Returns all order
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of order
 */
router.get('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    await OrderQuery.find().select("-__v").sort({ _id: -1 }).lean()
        .then(result => {
            return res.json({
                status: 200,
                message: 'List of Product Query',
                data: result
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "error",
                errorDetails: err,
            });
        });

});

/**
 * @swagger
 * /api/order/{userId}:
 *   get:
 *     tags:
 *       - Order
 *     description: Returns all order by customer ID
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of order by customer ID
 */
router.get('/:userId', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    await OrderQuery.find({ userId: req.params.userId }).select("-__v").sort({ _id: -1 }).lean()
        .then(result => {
            return res.json({
                status: 200,
                message: 'List of Product Query',
                data: result
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "error",
                errorDetails: err,
            });
        });

});

/**
 * @swagger
 * /api/order/vendor/{userId}:
 *   get:
 *     tags:
 *       - Order
 *     description: Returns all order by vendor 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of order by vendor
 */
router.get('/vendor/:userId', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    await OrderQuery.find({ assignVendor: { "$in": [req.params.userId] } }).select("-__v").sort({ _id: -1 }).lean()
        .then(result => {
            return res.json({
                status: 200,
                message: 'List of Product Query',
                data: result
            });
        })
        .catch(err => {
            return res.json({
                status: 400,
                message: "error",
                errorDetails: err,
            });
        });

});

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     tags:
 *       - Order
 *     description: Deletes a single OrderQuery
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: OrderQuery's id
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

    let uid = req.query.id;
    OrderQuery.findOneAndDelete({ '_id': uid })
        .then(result => {
            return res.json({
                status: 200,
                message: 'Product Query is Deleted!',
                result: result
            });
        })
        .catch(err => {
            return res.json(constant.somethingWrong);
        });
});






module.exports = router;