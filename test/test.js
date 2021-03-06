/**
 * This test file allows to run the basic initiation of the
 * HellowWorld class. It does not, however, simulate full
 * interaction with the node.
 */

var Weather = require('../weather');

var weather = Weather.create({});

weather.isSimulated = function () {
    return false;
};
weather.configuration = {
    simulated: false,
    cityName: "Wiesbaden",
    countryCode: "de",
    languageCode: "de",
    units: "metric",
    updateFrequencySeconds: 10,
    openWeatherMapKey: ""
};
weather.publishEvent = function(event, data){
    console.log("Event", event);
};
weather.publishStateChange = function(){
    console.log("State Change", this.getState());
};

weather.logInfo = function(){
    if (arguments.length == 1 ) {
        console.log(arguments[0]);
    }
    else{
        console.log(arguments);
    }
}
weather.logDebug = function(){
    weather.logInfo(arguments);
}
weather.logError = function(){
    weather.logInfo(arguments);
}

console.log("About to start");
weather.start();

