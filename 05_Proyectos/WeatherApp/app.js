import axios from "axios";
import chalk from "chalk";

const API_KEY = '7f6785a3e59a48b7d2758aa50794cd18';

async function getWeather(city) {

}

function getData() {
  let city = process.argv[2];
  
  if (!city) {
    console.log(chalk.red('Por favor, proporciona un nombre de lugar o ciudad'));
    console.log(chalk.red('Ejecuta el siguiente comndoa: node app.js [nombre ciudad]'));
  }
  getWeather(city).then().catch();
}

getData();
