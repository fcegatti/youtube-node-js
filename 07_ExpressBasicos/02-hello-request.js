import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end('<h1>Hola mundo desde Express.js</h1>');
});

app.get('/user/:id-:name-:age', (req, res) => {
  res.set({"Content-Type": "text/html; charset=utf-8" });
  res.end(
    `<h1>
      ${req.params.name}, bienvenidos a Express.js- Tu id es ${req.params.id} y tienes ${req.params.age} años.
    </h1>`
  );
});

app.get('/', (req, res) => {
  res.end('<h1>Hola mundo desde Express.js</h1>');
});


app.listen(3000, () => 
  console.log('Iniciando Express desde http://localhost:3000'));