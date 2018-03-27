const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(config.server.port, ()=> {
    console.log('App started on port ' + config.server.port);
});
