const swaggerJsDoc = require('swagger-jsdoc');
const jsonPackage = require('../package.json');

const swaggerOptions = {
    definition:{
        openapi: "3.1.0",
        info: {
            title: 'Workouts API',
            version: jsonPackage.version,
            description: 'CRUD API to track workouts',
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Yashas H Majmudar",
                url: "https://yashashm.dev",
                email: "yashashm.dev@gmail.com",
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
                description: 'Local Server',
            },
        ]
    },
    apis:['./routes/*.js', './docs/components.js'],
};

const options = swaggerJsDoc(swaggerOptions);

module.exports = {options}