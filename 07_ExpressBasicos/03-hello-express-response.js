import express from 'express';
import { resolve } from 'path';

const app = express();

app.get('/', (req, res) => {
  res.set({"Content-Type": "text/html; charset=utf-8" });
  res.end('<h1>Hola mundo desde Express.js con el método end</h1>');
});

app.get('/json', (req, res) => { 
  res.json({
    name: "Jon",
    age: 39,
    youtube: "@jonmircha"
  });
 });

app.get('/archivo', (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.get('/plantilla', (req, res) => { 
  // Hay que especificar el motor de plantilla a express.js
  res.render("plantilla");
 });

app.get('/jonmircha', (req, res) => { 
  // res.send("<h1>Bienvenidos a jonmircha.com</h1>");
  res.redirect(301, "https://jonmircha.com");
});

app.listen(3000, () => 
  console.log('Iniciando Express desde http://localhost:3000'));