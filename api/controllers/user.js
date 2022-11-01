var express = require('express'),
    router = express.Router(),
    constant = require('../constant');

const { ObjectId } = require('mongoose');
const User = require('../models/User');
const sendEmail = require('../libs/sesClient');


/**
 * @swagger
 * /api/user:
 *   post:
 *     tags:
 *       - User
 *     description: Create User
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
 *                  email: {type: string}
 *                  password: {type: string}
 *                  phone: {type: string}
 *                  role: {type: string}
 *                  isActive: {type: boolean}
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/', async (req, res) => {
    // if (! await constant.checkAuthorization(req)) {
    //     return res.status(401).send(constant.sessionExpired);
    // }

    let { fName, lName, password, email, phone, role, zipCode, country, companyName, isActive, productCategory = [] } = req.body;
    if (role == 'Vendor') {
        let start = 1000;
        let res1 = await User.find({ role: 'Vendor' }).sort({ '_id': -1 }).limit(1);
        if (res1.length == 0) {
            email = 'B1001'
        }
        else {
            let lastemail = parseInt(res1[0]?.email.slice(1)) + 1;
            email = 'B' + lastemail;
        }

    }
    const user = new User({
        fName, lName, password, email, phone, role, zipCode, country, companyName, isActive: false, creation_date: new Date()
    });
    User.exists({
        email: email
    }).then(res1 => {
        if (res1) {
            return res.json({
                status: 400,
                message: 'email Id is already registered !',
            });
        }
        else {
            user.save()
                .then(result => {
                    sendEmail(email).then(resEmail => {
                        return res.json({
                            status: 201,
                            message: 'user is created!',
                            data: result,
                            sms: resEmail
                        });
                    }).catch(err1 => {
                        return res.json({
                            status: 400,
                            message: "Something went wrong",
                            errorDetails: err1,
                        });
                    });

                })
                .catch(err => {
                    return res.json({
                        status: 400,
                        message: "Something went wrong",
                        errorDetails: err,
                    });
                });
        }
    }).catch(err => {
        return res.json({
            status: 400,
            message: "Something went wrong",
            errorDetails: err,
        });
    });
});

/**
 * @swagger
 * /api/user:
 *   put:
 *     tags:
 *       - User
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

    let { name, phone, role, password, isActive, productCategory = [] } = req.body;
    User.findByIdAndUpdate(req.body.id, {
        name, isActive, phone, role, password, productCategory
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
 * /api/user/vendor:
 *   put:
 *     tags:
 *       - User
 *     description: Update User vendor
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
 *                  _id: {type: string}
 *                  productCategory: {type: array}
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/vendor', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    let { _id, productCategory = [] } = req.body;
    User.findByIdAndUpdate(_id, {
        productCategory
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
 * /api/user:
 *   get:
 *     tags:
 *       - User
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 */
router.get('/', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    await User.find().select("-creation_date -__v").lean()
        .then(result => {
            return res.json({
                status: 200,
                message: 'List of user',
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
 *       - User
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
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
    User.findOneAndDelete({ '_id': uid })
        .then(result => {
            return res.json({
                status: 200,
                message: 'user is Deleted!',
                result: result
            });
        })
        .catch(err => {
            return res.json(constant.somethingWrong);
        });
});


/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login
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
 *                  email: {type: string}
 *                  password: {type: string}
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/login', (req, res) => {
    let {
        password,
        email,
    } = req.body;

    User.findOne({
        password: password,
        email: email,
        isActive: true,
    }).populate([
        {
            path: 'city',
            select: ['_id', 'name'],
        }]).select("-password -isActive -creation_date")
        .then(result => {
            if (result == null) {
                console.log("login error-", result)
                return res.json({
                    status: 400,
                    message: 'Invalid User & Password!',
                    error: result
                });
            }
            else {
                var token = constant.createAuthorization(email);
                if (token) {
                    return res.json({
                        status: 200,
                        message: 'Success!',
                        data: result,
                        token: token
                    });
                }
            }

        })
        .catch(err => {
            console.log("login error-", err)
            return res.json({
                status: 400,
                message: "error",
                error: err,
            });
        });

});


/**
 * @swagger
 * /api/user/{:id}/productCategory:
 *   get:
 *     tags:
 *       - User
 *     description: Login
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id/productCategory', async (req, res) => {
    if (! await constant.checkAuthorization(req)) {
        return res.status(401).send(constant.sessionExpired);
    }

    User.findById({ _id: req.params.id }).select("productCategory")
        .then(result => {
            return res.json({
                status: 200,
                message: 'Success!',
                data: result,
            });

        })
        .catch(err => {
            console.log("login error-", err)
            return res.json({
                status: 400,
                message: "error",
                error: err,
            });
        });

});

/**
 * @swagger
 * /api/user/create:
 *   get:
 *     tags:
 *       - User
 *     description: Set up a first time user
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/create', (req, res) => {
    const user = new User({
        fName: 'Pactap',
        lName: 'Admin',
        password: 'Admin',
        email: 'Admin',
        phone: '',
        role: 'ADMIN',
        zipCode: '',
        country: 'India',
        companyName: '',
        isActive: true,
        creation_date: new Date(),
        city: null,
    });
    User.exists({
        email: 'Admin'
    }).then(res1 => {
        if (res1) {
            return res.json({
                status: 400,
                message: 'email Id is already registered !',
            });
        }
        else {
            user.save()
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
        }
    }).catch(err => {
        return res.json({
            status: 400,
            message: "Something went wrong",
            errorDetails: err,
        });
    });
});



module.exports = router;