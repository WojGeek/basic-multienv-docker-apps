'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, Mundo! - Enviado desde el proyecto: prj-1-multi-apps')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
