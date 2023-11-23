const express = require('express');

const { userRoutes, loginRouter } = require('./routes/index');

// ...
const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(userRoutes);
app.use(loginRouter);

// Colocar as demais rotas aqui.

module.exports = app;
