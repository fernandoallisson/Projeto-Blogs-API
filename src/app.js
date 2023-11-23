const express = require('express');

const { userRoutes, loginRouter, categoryRouter, blogPostRouter } = require('./routes/index');

// ...
const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(userRoutes);
app.use(loginRouter);
app.use(categoryRouter);
app.use(blogPostRouter);

// Colocar as demais rotas aqui.

module.exports = app;
