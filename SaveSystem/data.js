import * as fs from 'expo-file-system';

export class WashroomData {
    constructor(coordinates, company, waitTimeFemales, waitTimeMales) {
        this.coordinates = coordinates;
        this.company = company;
        this.waitTimeFemales = waitTimeFemales;
        this.waitTimeMales = waitTimeMales;
    }
    coordinates; //coordinate object
    company; //string
    waitTimeFemales; //int
    waitTimeMales;  //int
}

export class Coordinate {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    latitude; //float
    longitude; //float
}