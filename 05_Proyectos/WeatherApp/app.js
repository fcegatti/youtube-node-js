import axios from "axios";
import chalk from "chalk";

const API_KEY = '7f6785a3e59a48b7d2758aa50794cd18';

function displayWeather(city, weatherData) {
  
}

function handleError(err) {
  console.log(chalk.red('Error: ', err.message));
  process.exit(1);
}

async function getWeather(city) {
  try {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(endpoint, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;

  } catch (err) {
    console.log(chalk.red(err));
    throw new Error(`No es posible obtener la información de la ciudad: ${city}`)
  }

}

function initApp() {
  let city = process.argv[2];
  
  if (!city) {
    console.log(chalk.red('Por favor, proporciona un nombre de lugar o ciudad'));
    console.log(chalk.red('Ejecuta el siguiente comndoa: node app.js [nombre ciudad]'));
  }
  getWeather(city)
  .then(weatherData => displayWeather(city, weatherData))
  .catch(handleError);
}

initApp();

