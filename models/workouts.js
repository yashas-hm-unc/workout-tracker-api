const {dateDifferenceInMinutes} = require('../helpers/serverHelper');
class Workouts{
    constructor(id,startTime, endTime, distance, avgHeartRate, weather, imageUploaded) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.distance = distance;
        this.avgHeartRate = avgHeartRate;
        this.weather = weather;
        this.imageUploaded = imageUploaded;
    }
    
    static createObject(data){
        return new Workouts(
            data['id'],
            Date.parse(data['start_time']),
            Date.parse(data['end_time']),
            data['distance'],
            data['avg_heart_rate'],
            data['weather'],
            data['route_image_uploaded']
        );
    }
    
    toJson(){
       const data = {
           id: this.id,
           startTime:this.startTime,
           endTime: this.endTime,
           distance: this.distance,
           avgHeartRate: this.avgHeartRate,
           duration: dateDifferenceInMinutes(this.startTime, this.endTime),
           weather: this.weather
       };
       
       if (this.imageUploaded){
           data['image'] = `http://localhost:3000/api/v1/workouts/${this.id}.jpg`;
       }
       
       return data;
    }
}
module.exports=Workouts;