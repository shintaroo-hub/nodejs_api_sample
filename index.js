 const express = require('express');
 const routes = require('./routes/routing.js');
 const path = require('path');
 
 const home = require('./apis/home');
 const devices = require('./apis/devices');
 
 const app = express();

 app.use(express.json());
 app.use(express.static(path.join(__dirname, 'public')));


app.get('/', home);
app.use('/api/v1', routes);
 
app.listen(8080, function () {
  console.log('API running on http://localhost:8080');
});