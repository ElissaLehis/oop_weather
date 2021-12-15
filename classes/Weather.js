class Weather {
    constructor(city) {
        this.city = city
        this.key = '3e500c624dcb732109cca2a193c15336'
    }

    async getWeather() {
        const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const responseData = await response.json()
        return responseData
    }
}