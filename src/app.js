const express = require('express');

const { userRoutes } = require('./routes/index');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(userRoutes);
// Colocar as demais rotas aqui.

// ...

// É importante exportar a constante `app`, 
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
