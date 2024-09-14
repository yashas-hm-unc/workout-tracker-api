const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: These APIs are used to view, update, create and delete workouts
 */
const controller = require('../controllers/workoutController');

/**
 * @swagger
 * paths:
 *   /workouts/new:
 *     post:
 *       summary: Endpoint to add new workouts
 *       tags: [Workouts]
 *       requestBody:
 *         description: All data required to create a new workout
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 startTime:
 *                   type: string
 *                   pattern: '^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$'
 *                   description: Timestamp of workout start time
 *                   example: 2024-09-14T12:10:43.000Z
 *                   required: true
 *                 endTime:
 *                   type: string
 *                   pattern: '^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$'
 *                   description: Timestamp of workout end time
 *                   example: 2024-09-14T12:10:43.000Z
 *                   required: true
 *                 distance:
 *                   type: number
 *                   description: Distance covered in workout in meters
 *                   example: 2500
 *                   required: true
 *                 avgHeartRate:
 *                   type: integer
 *                   description: Average heart date during workout
 *                   example: 110
 *                   required: true
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         200:
 *           $ref: '#/components/responses/ServerSuccessResponse' 
 */
router.post('/new', controller.createWorkout);

/**
 * @swagger
 * paths:
 *   /workouts/getAll:
 *     get:
 *       summary: Endpoint to get all workouts
 *       tags: [Workouts]
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         404:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 *         200:
 *           description: Success Response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Workouts'
 */
router.get('/getAll', controller.getAllWorkouts);

/**
 * @swagger
 * paths:
 *   /workouts/getById/{id}:
 *     get:
 *       summary: Endpoint to get workout by id
 *       tags: [Workouts]
 *       parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         404:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 *         200:
 *           description: Success Response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Workouts'
 */
router.get('/getById/:id', controller.getWorkoutById);

/**
 * @swagger
 * paths:
 *   /workouts/getByDate:
 *     get:
 *       summary: Endpoint to get workouts by start date
 *       tags: [Workouts]
 *       parameters:
 *         - in: query
 *           name: startDate
 *           required: true
 *           schema: 
 *             type: string
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         404:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 *         200:
 *           description: Success Response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Workouts'
 */
router.get('/getByDate', controller.getWorkoutByDate);

/**
 * @swagger
 * paths:
 *   /workouts/getByDuration:
 *     get:
 *       summary: Endpoint to get workouts by minimum duration
 *       tags: [Workouts]
 *       parameters:
 *         - in: query
 *           name: durationMinimum
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         404:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 *         200:
 *           description: Success Response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Workouts'
 */
router.get('/getByDuration', controller.getWorkoutByDuration);

/**
 * @swagger
 * paths:
 *   /workouts/getByDistance:
 *     get:
 *       summary: Endpoint to get workouts by minimum distance
 *       tags: [Workouts]
 *       parameters:
 *         - in: query
 *           name: minimumDistance
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         404:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 *         200:
 *           description: Success Response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Workouts'
 */
router.get('/getByDistance', controller.getWorkoutByDistance);

/**
 * @swagger
 * paths:
 *   /workouts/update/{id}:
 *     patch:
 *       summary: Endpoint to update workout by id
 *       tags: [Workouts]
 *       requestBody:
 *         description: All data required to update a workout
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 startTime:
 *                   type: string
 *                   pattern: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$'
 *                   description: Timestamp of workout start time
 *                   example: 2024-09-14 12:10:43
 *                   required: true
 *                 endTime:
 *                   type: string
 *                   pattern: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$'
 *                   description: Timestamp of workout end time
 *                   example: 2024-09-14 12:10:43
 *                   required: true
 *                 distance:
 *                   type: number
 *                   description: Distance covered in workout in meters
 *                   example: 2500
 *                   required: true
 *                 avgHeartRate:
 *                   type: integer
 *                   description: Average heart date during workout
 *                   example: 110
 *                   required: true
 *                 weather:
 *                   type: string
 *                   description: Weather details
 *                   example: clear sky
 *                   required: true
 *                 imageUploaded:
 *                   type: boolean
 *                   description: Flag if route image is uploaded or not
 *                   required: true
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         200:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 */
router.patch('/update/:id', controller.updateWorkout);

/**
 * @swagger
 * paths:
 *   /workouts/delete/{id}:
 *     delete:
 *       summary: Endpoint to update workout by id
 *       tags: [Workouts]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         500:
 *           $ref: '#/components/responses/ServerErrorResponse'
 *         200:
 *           $ref: '#/components/responses/ServerSuccessResponse'
 */
router.delete('/delete/:id', controller.deleteWorkout);

module.exports = router;