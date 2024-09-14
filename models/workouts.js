const {dateDifferenceInMinutes} = require('../helpers/serverHelper');

class Workouts{
    constructor(startTime, endTime, distance, avgHeartRate) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.distance = distance;
        this.avgHeartRate = avgHeartRate;
    }
    
    toJson(id){
       return  {
            'id': id,
           'startTime':this.startTime,
           'endTime': this.endTime,
           'distance': this.distance,
           'avgHeartRate': this.avgHeartRate,
           'duration': dateDifferenceInMinutes(this.startTime, this.endTime),
        }
    }
}
module.exports=Workouts;