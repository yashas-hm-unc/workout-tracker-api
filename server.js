const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const swaggerUI = require('swagger-ui-express');

const server = express();
const router = express.Router()

// Server Setup
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
require('dotenv').config();

const {options} = require('./docs/swaggerDocs');
router.use('/docs', swaggerUI.serve, swaggerUI.setup(options));

const workoutRoutes = require('./routes/workout_routes');
router.use('/workouts', workoutRoutes);

server.use('/api/v1', router);

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`server running on port ${PORT}`));