const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2b23deaa90fed476389466ae5a64362e&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}