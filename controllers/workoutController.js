const {client} = require('../helpers/database_connector');
const path = require("path");
const {serverSuccess, serverError} = require("../helpers/serverHelper");
const Workouts = require('../models/workouts')

async function createWorkout(req, res) {
    const formData = req.body;

    if (formData['startTime'] === undefined ||
        formData['endTime'] === undefined ||
        formData['distance'] === undefined ||
        formData['avgHeartRate'] === undefined
    ) {
        return serverError(res, {
            message: 'required params not specified'
        });
    }

    try {
        const query = `
            INSERT INTO allworkouts(start_time, end_time, distance, avg_heart_rate, weather, route_image_uploaded)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const values = [
            formData['startTime'],
            formData['endTime'],
            formData['distance'],
            formData['avgHeartRate'],
            'N/A',
            false
        ];

        await client.query(query, values);

        serverSuccess(res, {
            message: 'Successfully uploaded workout',
        });

    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    } 
}

async function getAllWorkouts(req, res) {
    try {
        const results = await client.query('SELECT * FROM allworkouts;');
        
        const workouts = [];

        for (let data of results.rows) {
            workouts.push(Workouts.createObject(data).toJson());
        }

        serverSuccess(res, workouts);

    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    } 
}

async function getWorkoutById(req, res) {
    try {
        
    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    }
}

async function getWorkoutByDate(req, res) {
    try {
        
    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    }
}

async function getWorkoutByDistance(req, res) {
    try {
       
    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    } 
}

async function getWorkoutByDuration(req, res) {
    try {
        
    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    } 
}

async function updateWorkout(req, res) {
    const formData = req.body;
    const workoutId = req.params.id;

    if (formData['startTime'] === undefined ||
        formData['endTime'] === undefined ||
        formData['distance'] === undefined ||
        formData['avgHeartRate'] === undefined
    ) {
        return serverError(res, {
            message: 'required params not specified'
        });
    }

    try {
        const query = `
            UPDATE allworkouts
            SET start_time=$1,
                end_time=$2,
                distance=$3,
                avg_heart_rate=$4,
                weather=$5,
                route_image_uploaded=$6
            WHERE id = $7;
        `;
        const values = [
            formData['startTime'],
            formData['endTime'],
            formData['distance'],
            formData['avgHeartRate'],
            formData['weather'],
            formData['imageUploaded'],
            workoutId,
        ];

        await client.query(query, values);

        serverSuccess(res, {
            message: 'Successfully updated workout',
        });

    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    }
}

async function deleteWorkout(req, res) {
    try {
        const workoutId = req.params.id;
        
        const query = `DELETE FROM allworkouts WHERE id=${workoutId}`;
        
        client.query(query);

        serverSuccess(res, {
            message: 'Successfully deleted workout',
        });
        
    } catch (error) {
        serverError(res, {
            error: error,
            message: error.message,
            stackTrace: error.stackTrace,
        });
    }
}

async function getImage(req, res) {

    path.join(process.cwd(), `../data/workout_images/${id}.jpg`);
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkoutById,
    getWorkoutByDate,
    getWorkoutByDistance,
    getWorkoutByDuration,
    updateWorkout,
    deleteWorkout
}