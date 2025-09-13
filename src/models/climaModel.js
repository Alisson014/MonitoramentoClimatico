var weatherList = [];
class weatherData {
    constructor(temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
    }
}

module.exports = {weatherList, weatherData};