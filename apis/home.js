const path = require('node:path');

function home(req, res) {
  const filePath = path.join(__dirname, '../views/home.html');
  res.sendFile(filePath);
}

module.exports = home;