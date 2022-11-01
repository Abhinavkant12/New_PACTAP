

const uri = "mongodb+srv://kant:zEqWz8Cr6ZGuTAlc@cluster0-lkyxs.mongodb.net/pactap?retryWrites=true&w=majority";

var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    port = process.env.PORT || 3000,
    path = require('path'),
    app = express(),
    awsServices = require('./controllers/aws-services'),
    user = require('./controllers/user'),
    orderQuery = require('./controllers/OrderQuery'),
    items = require('./controllers/Items');

//  html = fs.readFileSync('index.html'),

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: "PACTAP",
            version: '1.0.0',
            description: '<h4>PACTAP RESTful Swagger api </h4>',
            termsOfService: 'https://www.pristyncare.com/'
        },
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./controllers/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/aws', awsServices);
app.use('/api/user', user);
app.use('/api/order', orderQuery);
app.use('/api/items', items);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/upload_docs'));

app.use(express.static(path.join(__dirname, 'www')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

mongoose
    .connect(
        uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
    )
    .then(result => {
        app.listen(port);
        console.log(`server is up & running on port ${port}`);
    })
    .catch(err => {
        console.log("err");
        console.log(err);
    });
