require('dotenv').config();
const app = require('./app.js')

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

server.on('error', (error) => {
  console.log(error);
});
