/**
 * @swagger
 * components:
 *   schemas:
 *     Workouts:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 0
 *         startTime:
 *           type: string
 *           example: 2024-12-20 12:44:00
 *         endTime:
 *           type: string
 *           example: 2024-12-20 12:44:00 
 *         duration:
 *           type: integer
 *           description: Value in minutes
 *           example: 45
 *         distance:
 *           type: number
 *           description: Value in meters
 *           example: 2500
 *         avgHeartRate:
 *           type: integer
 *           example: 110
 *         weather:
 *           type: string
 *           example: clear sky
 *         image:
 *          type: string
 *   responses:
 *     ServerSuccessResponse:
 *       description: Success
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *               message:
 *                 type: string
 *     ServerErrorResponse:
 *       description: Server Error caused by some issue
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 description: Error Caused
 *                 example: Type Error
 *               message:
 *                 type: string
 *                 description: Custom Error Message
 *                 example: Error while converting to model
 *               stackTrace:
 *                 type: string
 *                 description: Stacktrace for error
 *                 example: "Error at line 294: model.js"
 *
 */