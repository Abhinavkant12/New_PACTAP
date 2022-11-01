var jwt = require('jsonwebtoken'),
    secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    expiresIn = '24h';

const AWS_CONFIG = {
    AWS_ACCESS_KEY_ID: 'AKIA367KMSKGRI226M5P',
    AWS_SECRET_ACCESS_KEY: "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",
    AWS_REGION: 'us-east-1',
    AWS_BUCKET: 'pactap',
    AWS_EMAIL_SENDER: "hello@pactap.com"
}

const sessionExpired = {
    status: 400,
    message: "Session Expired. Please Login In",
}

const somethingWrong = {
    status: 400,
    message: "Something went wrong"
}

function checkAuthorization(req) {
    let response = false;
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            response = false;
        } else {
            response = true;
        }
    });
    return response;
}

function createAuthorization(email) {
    var token;
    token = jwt.sign({
        email: email
    },
        secret, {
        expiresIn: expiresIn
    });

    return token;
}

function createAuthorizationMobile(email) {
    var token;
    token = jwt.sign({
        email: email
    },
        secret, {
        expiresIn: '365d'
    });

    return token;
}

module.exports = {
    AWS_CONFIG,
    sessionExpired,
    somethingWrong,
    checkAuthorization,
    createAuthorizationMobile,
    createAuthorization
}